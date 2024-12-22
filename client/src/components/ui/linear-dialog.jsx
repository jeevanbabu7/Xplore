'use client';

import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils';
import { XIcon } from 'lucide-react';

// Dialog Context
const DialogContext = React.createContext(null);

function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
}

// Dialog Provider
function DialogProvider({ children, transition }) {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = `dialog-${Math.random().toString(36).substr(2, 9)}`;
  const triggerRef = useRef(null);

  const contextValue = { isOpen, setIsOpen, uniqueId, triggerRef };

  return (
    <DialogContext.Provider value={contextValue}>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </DialogContext.Provider>
  );
}

// Dialog Component
function Dialog({ children, transition }) {
  return (
    <DialogProvider transition={transition}>
      <MotionConfig transition={transition}>{children}</MotionConfig>
    </DialogProvider>
  );
}

// Dialog Trigger Component
function DialogTrigger({ children, className, style }) {
  const { setIsOpen, isOpen, uniqueId, triggerRef } = useDialog();

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setIsOpen(!isOpen);
      }
    },
    [isOpen, setIsOpen]
  );

  return (
    <motion.div
      ref={triggerRef}
      layoutId={uniqueId}
      className={cn('relative cursor-pointer', className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={style}
      role="button"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-controls={`dialog-content-${uniqueId}`}
    >
      {children}
    </motion.div>
  );
}

// Dialog Container Component
function DialogContainer({ children, className, style }) {
  return (
    <div
      className={cn(
        'relative mx-auto max-w-lg p-6 bg-white rounded-lg shadow-lg',
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}

// Dialog Content Component
function DialogContent({ children, className, style }) {
  const { setIsOpen, isOpen, uniqueId, triggerRef } = useDialog();
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      triggerRef.current?.focus();
    }
  }, [isOpen, triggerRef]);

  return (
    <motion.div
      ref={containerRef}
      layoutId={uniqueId}
      className={cn('overflow-hidden', className)}
      style={style}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </motion.div>
  );
}

// Dialog Title Component
function DialogTitle({ children, className, style }) {
  return (
    <h2
      className={cn('text-xl font-bold mb-2', className)}
      style={style}
    >
      {children}
    </h2>
  );
}

// Dialog Subtitle Component
function DialogSubtitle({ children, className, style }) {
  return (
    <h3
      className={cn('text-lg font-semibold text-gray-700 mb-2', className)}
      style={style}
    >
      {children}
    </h3>
  );
}

// Dialog Description Component
function DialogDescription({ children, className, style }) {
  return (
    <p
      className={cn('text-sm text-gray-600', className)}
      style={style}
    >
      {children}
    </p>
  );
}

// Dialog Image Component
function DialogImage({ src, alt, className, style }) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn('w-full h-auto rounded mb-4', className)}
      style={style}
    />
  );
}

// Dialog Close Button
function DialogClose({ className, style }) {
  const { setIsOpen } = useDialog();

  const handleClick = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <button
      className={cn('absolute top-4 right-4', className)}
      style={style}
      onClick={handleClick}
      aria-label="Close dialog"
    >
      <XIcon />
    </button>
  );
}

// Dialog Portal
function DialogPortal({ children, className, containerClassName }) {
  const { isOpen } = useDialog();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className={cn('fixed inset-0 z-50', className)}>
          <div className={cn('absolute inset-0 bg-black/50', containerClassName)}>
            {children}
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogContainer,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogSubtitle,
  DialogDescription,
  DialogImage,
  DialogPortal,
};
