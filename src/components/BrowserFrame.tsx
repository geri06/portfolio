import type { ReactNode } from 'react';

export const BrowserFrame = ({ children, title = "Project Window" }: { children: ReactNode, title?: string }) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-[rgba(0,0,0,0.08)] shadow-lg bg-white w-full transition-transform hover:scale-[1.005] duration-500">
      {/* Browser Bar */}
      <div className="bg-[#f5f5f7] border-b border-[rgba(0,0,0,0.06)] px-5 pt-3.5 pb-2.5 flex items-center shrink-0">
        <div className="flex space-x-2 w-20">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        
        {/* URL Bar */}
        <div className="bg-white border border-[rgba(0,0,0,0.06)] rounded-lg px-4 py-1.5 flex-1 mx-4 max-w-md flex items-center justify-center text-xs text-[#86868b] font-mono">
           {title}
        </div>
        
        <div className="w-20" />
      </div>

      {/* Content viewport */}
      <div className="relative w-full bg-[#fafafa] flex flex-col items-center justify-center overflow-hidden min-h-[300px] md:min-h-[450px]">
        {children}
      </div>
    </div>
  );
};
