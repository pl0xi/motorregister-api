import type { Route } from "./+types/update_db";
import React from "react";
export function meta({}: Route.MetaArgs) {
  return [{ title: "DB page" }, { name: "description", content: "DB page" }];
}

export default function db_page() {
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  const update_db = () => {
    setIsUpdating(true);
    setProgress(0);

    // Simulate progress update
    let i = 0;
    const interval = setInterval(() => {
      if (i <= 100) {
        setProgress(i);
        i++;
      } else {
        clearInterval(interval);
        setIsUpdating(false);
      }
    }, 100);
  };

  return (
    <div>
      <h1 className="text-left ml-20 mt-10 font-bold text-3xl">Updating DB</h1>
      <div className="bg-gray-200 rounded-lg p-6 mx-20 mt-6 shadow-sm">
        <p className="text-gray-700">
          This is where database update information will be displayed.
          <div className="mt-4">
            <button
              onClick={update_db}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              disabled={isUpdating}
            >
              {isUpdating ? (
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <span>{progress}%</span>
                </div>
              ) : (
                "Update Database"
              )}
            </button>
          </div>
        </p>
      </div>
    </div>
  );
}
