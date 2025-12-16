import React, { useState, useEffect, useRef, useCallback } from 'react';

// 动作类型
type ActionType = 'standby' | 'left' | 'right' | 'eat' | 'sleep' | 'love' | 'mention';

// 动作配置接口
interface ActionConfig {
  frames: string[]; // 图片路径数组
  loop: boolean; // 是否循环
  duration?: number; // 每帧持续时间（ms）
}

// 流萤宠物组件 - 完全按照原项目逻辑
const FireflyPet: React.FC = () => {
  // 位置状态
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  
  // 动作状态
  const [currentAction, setCurrentAction] = useState<ActionType>('standby');
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [walkingDirection, setWalkingDirection] = useState<'left' | 'right' | null>(null);
  
  // 右键菜单状态
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  
  // 属性状态（内部使用，不显示）
  const [mood, setMood] = useState(100);
  const [satiety, setSatiety] = useState(100);
  const [stamina, setStamina] = useState(100);
  
  // 定时器引用
  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const moveTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const imageCacheRef = useRef<Map<string, HTMLImageElement>>(new Map());
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // 预加载所有图片
  useEffect(() => {
    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (imageCacheRef.current.has(src)) {
          resolve();
          return;
        }
        const img = new Image();
        img.onload = () => {
          imageCacheRef.current.set(src, img);
          resolve();
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    const preloadAllImages = async () => {
      const allImages: string[] = [];
      Object.values(actionConfigs).forEach(config => {
        allImages.push(...config.frames);
      });

      try {
        await Promise.all(allImages.map(img => loadImage(img).catch(() => {
          console.warn('Failed to preload image:', img);
        })));
        setImagesLoaded(true);
        console.log('All images preloaded successfully');
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // 即使失败也继续，避免阻塞
      }
    };

    preloadAllImages();
  }, []);

  // 动作配置 - 完全按照原项目，持续动作循环，非持续动作播放完返回待机
  const actionConfigs: Record<ActionType, ActionConfig> = {
    standby: {
      frames: [
        '/firefly/Standby/0.png',
        '/firefly/Standby/1.png',
        '/firefly/Standby/2.png',
        '/firefly/Standby/3.png',
        '/firefly/Standby/4.png',
        '/firefly/Standby/5.png',
      ],
      loop: true, // 持续动作，循环
      duration: 150, // 原项目使用定时器，这里用更快的速度
    },
    left: {
      frames: [
        '/firefly/left/0.png',
        '/firefly/left/1.png',
        '/firefly/left/2.png',
        '/firefly/left/3.png',
      ],
      loop: true, // 持续动作，循环
      duration: 100, // 行走动作更快
    },
    right: {
      frames: [
        '/firefly/right/0.png',
        '/firefly/right/1.png',
        '/firefly/right/2.png',
        '/firefly/right/3.png',
      ],
      loop: true, // 持续动作，循环
      duration: 100,
    },
    eat: {
      frames: [
        '/firefly/eat/0.png',
        '/firefly/eat/1.png',
        '/firefly/eat/2.png',
        '/firefly/eat/3.png',
      ],
      loop: true, // 持续动作，循环播放，直到第二次点击才取消
      duration: 150,
    },
    sleep: {
      frames: [
        '/firefly/sleep/0.png',
        '/firefly/sleep/1.png',
        '/firefly/sleep/2.png',
        '/firefly/sleep/3.png',
      ],
      loop: true, // 持续动作，循环
      duration: 200, // 睡觉动作稍慢但不要太慢
    },
    love: {
      frames: [
        '/firefly/Love/0.png',
        '/firefly/Love/1.png',
        '/firefly/Love/2.png',
        '/firefly/Love/3.png',
        '/firefly/Love/4.png',
        '/firefly/Love/5.png',
      ],
      loop: false, // 非持续动作，播放完返回待机
      duration: 150,
    },
    mention: {
      frames: [
        '/firefly/mention/0.png',
        '/firefly/mention/1.png',
        '/firefly/mention/2.png',
        '/firefly/mention/3.png',
      ],
      loop: true, // 持续动作，循环（拖拽时持续）
      duration: 150,
    },
  };

  // 预加载所有图片
  useEffect(() => {
    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (imageCacheRef.current.has(src)) {
          resolve();
          return;
        }
        const img = new Image();
        img.onload = () => {
          imageCacheRef.current.set(src, img);
          resolve();
        };
        img.onerror = () => {
          console.warn('Failed to preload image:', src);
          resolve(); // 即使失败也继续，避免阻塞
        };
        img.src = src;
      });
    };

    const preloadAllImages = async () => {
      const allImages: string[] = [];
      Object.values(actionConfigs).forEach(config => {
        allImages.push(...config.frames);
      });

      try {
        // 分批加载，避免一次性加载太多
        const batchSize = 10;
        for (let i = 0; i < allImages.length; i += batchSize) {
          const batch = allImages.slice(i, i + batchSize);
          await Promise.all(batch.map(img => loadImage(img)));
        }
        setImagesLoaded(true);
        console.log('All images preloaded successfully');
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // 即使失败也继续，避免阻塞
      }
    };

    preloadAllImages();
  }, []);

  // 初始化位置（右侧中部）
  useEffect(() => {
    const initPosition = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      setPosition({
        x: windowWidth - 250,
        y: windowHeight / 2 - 100,
      });
    };
    initPosition();
    window.addEventListener('resize', initPosition);
    return () => window.removeEventListener('resize', initPosition);
  }, []);

  // 动画播放逻辑 - 按照原项目逻辑
  useEffect(() => {
    const config = actionConfigs[currentAction];
    if (!config || config.frames.length === 0) {
      console.log('Animation config not found for action:', currentAction);
      return;
    }

    console.log('Starting animation for action:', currentAction, 'frames:', config.frames.length, 'loop:', config.loop, 'duration:', config.duration);

    // 清理之前的定时器
    if (animationTimerRef.current) {
      clearInterval(animationTimerRef.current);
      animationTimerRef.current = null;
    }

    // 重置帧数
    setCurrentFrame(0);

    let frameIndex = 0;
    const playAnimation = () => {
      frameIndex = frameIndex + 1;
      if (frameIndex >= config.frames.length) {
        if (config.loop) {
          // 循环动作，回到第一帧
          frameIndex = 0;
        } else {
          // 非循环动作，播放完后返回待机
          frameIndex = config.frames.length - 1; // 保持在最后一帧
          clearInterval(animationTimerRef.current!);
          animationTimerRef.current = null;
          setTimeout(() => {
            console.log('Non-loop animation finished, returning to standby');
            setCurrentAction('standby');
          }, 50);
        }
      }
      console.log('Animation frame update:', frameIndex, '/', config.frames.length, 'action:', currentAction, 'image:', config.frames[frameIndex]);
      setCurrentFrame(frameIndex);
    };

    // 立即播放第一帧
    setCurrentFrame(0);
    frameIndex = 0;

    const intervalId = setInterval(
      playAnimation,
      config.duration || 150
    );
    animationTimerRef.current = intervalId;

    console.log('Animation timer started, interval:', config.duration || 150);

    return () => {
      if (animationTimerRef.current) {
        clearInterval(animationTimerRef.current);
        animationTimerRef.current = null;
      }
    };
  }, [currentAction]);

  // 行走功能（手动触发）- 持续行走，碰到边缘反向，直到再次点击停止
  const handleWalk = useCallback(() => {
    console.log('handleWalk called, isMoving:', isMoving, 'walkingDirection:', walkingDirection);
    // 如果正在行走，则停止
    if (isMoving && walkingDirection) {
      setIsMoving(false);
      setWalkingDirection(null);
      setCurrentAction('standby');
      if (moveTimerRef.current) {
        clearInterval(moveTimerRef.current);
        moveTimerRef.current = null;
      }
      return;
    }
    
    // 开始行走
    setIsMoving(true);
    const direction = Math.random() > 0.5 ? 'left' : 'right';
    setWalkingDirection(direction);
    setCurrentAction(direction);

    if (moveTimerRef.current) {
      clearInterval(moveTimerRef.current);
    }

    const moveSpeed = 5; // 降低移动速度，从10改为5
    let currentDirection = direction;

    moveTimerRef.current = setInterval(() => {
      setPosition((prev) => {
        const deltaX = currentDirection === 'left' ? -moveSpeed : moveSpeed;
        const newX = prev.x + deltaX;
        
        const maxX = window.innerWidth - 200;
        const minX = 0;
        
        // 检查是否碰到边缘
        if (newX <= minX) {
          // 碰到左边缘，向右走
          currentDirection = 'right';
          setWalkingDirection('right');
          setCurrentAction('right');
          return { x: minX, y: prev.y };
        } else if (newX >= maxX) {
          // 碰到右边缘，向左走
          currentDirection = 'left';
          setWalkingDirection('left');
          setCurrentAction('left');
          return { x: maxX, y: prev.y };
        }

        return { x: newX, y: prev.y };
      });
    }, 50);
  }, [isMoving, walkingDirection]);

  // 拖拽处理 - 按照原项目逻辑
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return; // 只处理左键
    
    e.preventDefault();
    e.stopPropagation();
    
    console.log('handleMouseDown called');
    
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) {
      console.log('No rect found');
      return;
    }
    
    const clickY = e.clientY - rect.top;
    const clickX = e.clientX - rect.left;
    
    console.log('Click position:', { clickX, clickY, rectWidth: rect.width, rectHeight: rect.height });
    
    // 检查点击是否在流萤区域内
    if (clickX >= 0 && clickX <= rect.width && clickY >= 0 && clickY <= rect.height) {
      if (clickY < rect.height / 4) {
        // 摸头动作（点击头部区域）- 原项目的 loveEvent
        console.log('Love action triggered');
        setCurrentAction('love');
        setTimeout(() => {
          setCurrentAction('standby');
          setMood((prev) => Math.min(100, prev + 5));
        }, 6 * 150 + 100); // 6帧 * 150ms + 缓冲
        return;
      } else {
        // 提起动作（点击其他区域）- 原项目的 mentionEvent
        console.log('Mention action triggered');
        setIsDragging(true);
        setDragOffset({
          x: e.clientX - position.x,
          y: e.clientY - position.y,
        });
        setCurrentAction('mention');
      }
    }
  }, [position]);

  // 全局鼠标移动和释放事件
  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;

      const maxX = window.innerWidth - 200;
      const maxY = window.innerHeight - 200;
      const clampedX = Math.max(0, Math.min(maxX, newX));
      const clampedY = Math.max(0, Math.min(maxY, newY));

      setPosition({ x: clampedX, y: clampedY });
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        // 释放后返回待机 - 原项目的 standbyEvent
        setCurrentAction('standby');
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, dragOffset]);

  // 喂食功能 - 持续动作，第二次点击才取消
  const handleFeed = useCallback(() => {
    console.log('handleFeed called, currentAction:', currentAction);
    // 如果正在喂食，则停止
    if (currentAction === 'eat') {
      setCurrentAction('standby');
      return;
    }
    
    // 开始喂食（只有在待机状态才能开始）
    if (currentAction !== 'standby') return;
    setCurrentAction('eat');
    setSatiety((prev) => Math.min(100, prev + 20));
    setMood((prev) => Math.min(100, prev + 5));
  }, [currentAction]);

  // 睡觉功能 - 持续动作，第二次点击才取消
  const handleSleep = useCallback(() => {
    console.log('handleSleep called, currentAction:', currentAction);
    // 如果正在睡觉，则停止
    if (currentAction === 'sleep') {
      setCurrentAction('standby');
      return;
    }
    
    // 开始睡觉（只有在待机状态才能开始）
    if (currentAction !== 'standby') return;
    setCurrentAction('sleep');
    setStamina((prev) => Math.min(100, prev + 30));
  }, [currentAction]);

  // 清理定时器
  useEffect(() => {
    return () => {
      if (animationTimerRef.current) {
        clearInterval(animationTimerRef.current);
      }
      if (moveTimerRef.current) {
        clearInterval(moveTimerRef.current);
      }
    };
  }, []);

  // 属性自然衰减
  useEffect(() => {
    const decayTimer = setInterval(() => {
      setSatiety((prev) => Math.max(0, prev - 0.1));
      setStamina((prev) => Math.max(0, prev - 0.1));
      if (satiety < 20 || stamina < 20) {
        setMood((prev) => Math.max(0, prev - 0.05));
      }
    }, 10000);

    return () => clearInterval(decayTimer);
  }, [satiety, stamina]);

  // 关闭右键菜单（点击外部）
  useEffect(() => {
    if (!contextMenu) return;

    const handleClickOutside = () => {
      setContextMenu(null);
    };

    const handleContextMenu = () => {
      setContextMenu(null);
    };

    setTimeout(() => {
      window.addEventListener('click', handleClickOutside);
      window.addEventListener('contextmenu', handleContextMenu);
    }, 100);

    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [contextMenu]);

  const config = actionConfigs[currentAction];
  const currentImage = config?.frames[currentFrame] || actionConfigs.standby.frames[0];
  
  // 调试信息
  useEffect(() => {
    console.log('Current state:', { currentAction, currentFrame, currentImage, isMoving, walkingDirection });
  }, [currentAction, currentFrame, currentImage, isMoving, walkingDirection]);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed select-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isDragging ? 'scale(1.05)' : 'scale(1)',
          transition: isDragging ? 'none' : 'transform 0.2s ease',
          cursor: isDragging ? 'grabbing' : 'default',
          zIndex: 999999,
          pointerEvents: 'auto',
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleMouseDown(e);
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setContextMenu({ x: e.clientX, y: e.clientY });
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* 流萤角色 */}
        <img
          src={currentImage}
          alt="流萤"
          className="w-48 h-48 object-contain drop-shadow-2xl pointer-events-none"
          draggable={false}
          style={{
            opacity: imageCacheRef.current.has(currentImage) ? 1 : 0.3,
            transition: 'opacity 0.1s ease-in-out',
          }}
          onError={(e) => {
            console.error('Failed to load image:', currentImage, 'action:', currentAction, 'frame:', currentFrame);
            e.currentTarget.style.opacity = '0.5';
          }}
          onLoad={(e) => {
            // 确保图片已缓存
            if (!imageCacheRef.current.has(currentImage)) {
              imageCacheRef.current.set(currentImage, e.currentTarget);
            }
            e.currentTarget.style.opacity = '1';
          }}
          key={`${currentAction}-${currentFrame}`}
        />
        {/* 预加载下一帧图片（隐藏） */}
        {(() => {
          const config = actionConfigs[currentAction];
          if (!config) return null;
          const nextFrame = (currentFrame + 1) % config.frames.length;
          const nextImage = config.frames[nextFrame];
          if (nextImage && !imageCacheRef.current.has(nextImage)) {
            return (
              <img
                src={nextImage}
                alt=""
                className="hidden"
                onLoad={(e) => {
                  if (!imageCacheRef.current.has(nextImage)) {
                    imageCacheRef.current.set(nextImage, e.currentTarget);
                  }
                }}
              />
            );
          }
          return null;
        })()}
      </div>
      
      {/* 右键菜单 */}
      {contextMenu && (
        <div
          className="fixed bg-black/90 border border-white/20 rounded-lg p-2 shadow-lg"
          style={{
            left: `${contextMenu.x}px`,
            top: `${contextMenu.y}px`,
            zIndex: 999999,
            pointerEvents: 'auto',
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Walk button clicked');
              handleWalk();
              setContextMenu(null);
            }}
            className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
            style={{ pointerEvents: 'auto' }}
          >
            行走
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Feed button clicked');
              handleFeed();
              setContextMenu(null);
            }}
            className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
            style={{ pointerEvents: 'auto' }}
          >
            喂食
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Sleep button clicked');
              handleSleep();
              setContextMenu(null);
            }}
            className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
            style={{ pointerEvents: 'auto' }}
          >
            睡觉
          </button>
        </div>
      )}
    </>
  );
};

export default FireflyPet;
