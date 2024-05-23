import React from "react";

export default function Loading2() {
  return (
    <>
      <div className="border border-blue-300 shadow w-full rounded-md md:pt-5 py-2 mt-0 mx-auto md:px-5 px-2 mb-14 md:pb-2">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-2">
            <div className="space-y-3">
              <div className="h-10 bg-slate-600 w-full rounded py-2"></div>
              <ul>
                <li className="h-8 bg-slate-600 w-8/12 my-3 rounded py-2"></li>
                <li className="h-8 bg-slate-600 w-8/12 my-3 rounded py-2"></li>
                <li className="h-8 bg-slate-600 w-8/12 my-3 rounded py-2"></li>
                <li className="h-8 bg-slate-600 w-8/12 my-3 rounded py-2"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
