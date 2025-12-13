document.addEventListener("DOMContentLoaded", () => {
  // I. CHỨC NĂNG XỬ LÝ TÌM KIẾM THÀNH PHỐ

  // Ghi chú: Khu vực code này cần được mở rộng để xử lý logic Tìm kiếm tỉnh thành (Yêu cầu bắt buộc)
  const searchBtn = document.getElementById("search-btn");
  const searchInput = document.getElementById("search-input");

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      alert(
        `Đang tìm kiếm ẩm thực cho tỉnh/thành phố: "${query}". (Logic tìm kiếm cần được code ở đây).`
      );
      // Sau này, bạn có thể thêm logic AJAX hoặc chuyển trang ở đây.
    } else {
      alert("Vui lòng nhập tên tỉnh/thành phố cần tìm.");
    }
  });

  // II. GHI CHÚ LOGIC (DÀNH CHO NGƯỜI DÙNG PHÁT TRIỂN TIẾP)

  // Ghi chú: Icon Hamburger đã được làm theo yêu cầu: CHỈ XUẤT HIỆN ICON, không có chức năng trượt.
  // Nếu bạn muốn thêm chức năng sau này, hãy thêm event listener cho #hamburger-btn ở đây.

  // Ghi chú: Chức năng chuyển sang trang "Đăng ký" sẽ được code ở đây sau khi bạn tạo trang đó.
  document.getElementById("signin-btn")?.addEventListener("click", () => {
    alert(
      "Chuyển sang trang Đăng nhập/Đăng ký. (Bạn cần tạo trang Đăng ký/Đăng nhập và liên kết tại đây)."
    );
    // Ví dụ: window.location.href = 'login.html';
  });

  // Ghi chú: Khu vực code quản lý chức năng Mở/Đóng Side Menu đã bị loại bỏ theo yêu cầu mới.
});