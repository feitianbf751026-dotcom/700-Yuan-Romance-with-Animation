import React, { useState } from 'react'; 
import StartScreen from './components/StartScreen';
import GameUI from './components/GameUI';
import FireflyPet from './components/FireflyPet';
import { llmService } from './services/llmService';
import { GameState, Choice } from './types';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    history: [],
    currentScene: null,
    isLoading: false,
    gameStarted: false,
    gameEnded: false,
    backgroundImageUrl: ''
  });

  const handleStartGame = async () => {
    setGameState(prev => ({ ...prev, isLoading: true }));
    try {
      const initialScene = await llmService.startNewGame();
      setGameState(prev => ({
        ...prev,
        gameStarted: true,
        isLoading: false,
        currentScene: initialScene,
        history: [{ 
            role: 'model', 
            parts: JSON.stringify(initialScene) 
        }]
      }));
    } catch (error) {
      console.error("Error starting game:", error);
      alert("游戏启动失败，请刷新重试。");
      setGameState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const handleChoice = async (choice: Choice) => {
    if (!gameState.currentScene || gameState.isLoading) return;

    setGameState(prev => ({ ...prev, isLoading: true }));
    
    const updatedHistory = [
      ...gameState.history,
      { role: 'user' as const, parts: choice.text }
    ];

    try {
      // 使用 choice.id 而不是 choice.text
      const nextScene = await llmService.nextTurnWithChoice(updatedHistory, choice);
      
      setGameState(prev => ({
        ...prev,
        currentScene: nextScene,
        isLoading: false,
        gameEnded: nextScene.isEnding,
        history: [
            ...updatedHistory,
            { role: 'model', parts: JSON.stringify(nextScene) }
        ]
      }));
    } catch (error) {
      console.error("Error generating next turn:", error);
      alert("剧情生成失败，正在尝试恢复...");
      setGameState(prev => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <div className="relative w-screen h-screen bg-slate-900 text-white overflow-hidden font-sans">
      {!gameState.gameStarted ? (
        <StartScreen onStart={handleStartGame} isLoading={gameState.isLoading} />
      ) : (
        <>
           {gameState.currentScene && (
            <GameUI 
                scene={gameState.currentScene} 
                onChoiceSelected={handleChoice}
                isLoading={gameState.isLoading}
            />
           )}
           
           {gameState.gameEnded && gameState.currentScene && (
             <div className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center z-50 p-8 text-center transition-opacity duration-1000">
                <h2 className="text-5xl font-serif-sc mb-6 text-blue-200 drop-shadow-lg">
                    {gameState.currentScene.endingType === 'good' ? '💝 美好的结局' : 
                     gameState.currentScene.endingType === 'bad' ? '💔 遗憾的结局' : 
                     '🤝 另一种可能'}
                </h2>
                <div className="h-px w-32 bg-gray-600 mb-8"></div>
                <p className="max-w-2xl text-xl text-gray-300 leading-relaxed mb-12 font-serif-sc tracking-wide whitespace-pre-line">
                    {gameState.currentScene.narrative}
                </p>
                
                {/* 结局提示 */}
                <div className="mb-8 text-sm text-gray-500">
                  <p>你已解锁 5 个结局中的 1 个</p>
                  <p className="mt-2">💡 提示：不同的选择会带来完全不同的故事走向</p>
                </div>

                <div className="flex gap-4">
                  <button 
                      onClick={() => window.location.reload()}
                      className="px-10 py-4 border border-white/30 hover:border-white hover:bg-white/10 text-white text-lg tracking-[0.2em] transition-all duration-300 font-serif-sc"
                  >
                      重新开始
                  </button>
                  <button 
                      onClick={() => {
                        const state = llmService.getState();
                        alert(`调试信息：\n好感度: ${state.affection}\n勇气: ${state.courage}\n诚实: ${state.honesty}\n分支: ${state.branch}\n坦白: ${state.hasConfessed}`);
                      }}
                      className="px-10 py-4 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 text-blue-300 text-lg tracking-[0.2em] transition-all duration-300 font-serif-sc"
                  >
                      查看数据
                  </button>
                </div>
             </div>
           )}
        </>
      )}
      {/* 流萤桌宠 - 始终显示在最上层 */}
      <FireflyPet />
    </div>
  );
};

export default App;