// components/FloatingContact.tsx
import React from "react";

const personImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAMAAABi2JZbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LjE2NDUyMywgMjAyMS8wMS8xNC0wNDo0MDo1NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE5QkQ0NTZCM0U0NjExRUI5QkI5RkFGRjJEMDZDN0M5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE5QkQ0NTZDM0U0NjExRUI5QkI5RkFGRjJEMDZDN0M5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTlCRDQ1NkIzRTQ2MTFFQjlCQjlGQUZGMkQwNkM3QzkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTlCRDQ1NkIzRTQ2MTFFQjlCQjlGQUZGMkQwNkM3QzkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4z5e9XAAAABmJLR0QA/wD/AP////8AUgAAAHJJREFUeNrtwTEBAAAAwqD1T20ND8MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDH3QABK6tRwgAAAABJRU5ErkJggg==";

export default function FloatingContact() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-all duration-300 cursor-pointer animate-bounce-slow">
      {/* รูปคน */}
      <div className="w-32 h-48 md:w-40 md:h-56">
        <img
          src={personImage}
          alt="ติดต่อเรา"
          className="w-full h-full object-contain drop-shadow-lg"
          draggable={false}
        />
      </div>

      {/* ข้อความ */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-4 px-6 font-bold text-lg tracking-wider">
        สนใจติดต่อ
      </div>

      {/* จุดเด้ง ๆ น่ารัก */}
      <div className="absolute -top-2 -right-2 w-10 h-10 bg-pink-500 rounded-full animate-ping opacity-75"></div>
      <div className="absolute -top-2 -right-2 w-10 h-10 bg-pink-500 rounded-full"></div>
    </div>
  );
}