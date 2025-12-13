document.addEventListener("DOMContentLoaded", () => {
  // I. CHỨC NĂNG XỬ LÝ TÌM KIẾM THÀNH PHỐ

  const searchBtn = document.getElementById("search-btn");
  const searchInput = document.getElementById("search-input");
  const resultsContainer = document.getElementById("results-container"); // Assume you have a results div
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const dropdownMenu = document.getElementById("dropdown-menu");

  // Toggle dropdown menu
  hamburgerBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
  });

  // Ẩn menu khi click outside
  document.addEventListener("click", (event) => {
    if (!hamburgerBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove("active");
    }
  });

  // Tạo div cho suggestions
  const suggestionsContainer = document.createElement("div");
  suggestionsContainer.id = "suggestions";
  suggestionsContainer.style.cssText = `
    position: absolute;
    background: white;
    border: 1px solid #ccc;
    max-height: 200px;
    overflow-y: auto;
    width: 100%;
    z-index: 1000;
    display: none;
  `;
  searchInput.parentNode.style.position = "relative";
  searchInput.parentNode.appendChild(suggestionsContainer);

  // Sample data (replace with actual data fetching logic later)
  const foodDataByCity = {
    "Hà Nội": ["Phở", "Bún chả", "Nem rán"],
    "Hồ Chí Minh": ["Cơm tấm", "Bánh mì Sài Gòn", "Hủ tiếu Nam Vang"],
    "Đà Nẵng": ["Mì Quảng", "Gỏi cá Nam Ô", "Bánh nậm", "Chè xoa xoa hạt lựu"],
    "Huế": ["Bún bò Huế", "Cơm hến", "Bánh nậm", "Chè xoa xoa hạt lựu"],
    "Thái Nguyên": ["Bánh chưng Bờ Đậu", "Chè Tân Cương", "Nem chua Đại Từ", "Bánh cóoc mò"],
    "Thanh Hóa": ["Nem chua", "Mắm tép", "Chè lam Phủ Quảng", "Chẻo nhệch"],
    "Hà Tĩnh": ["Gỏi cá đục đặc biệt", "Cháo canh", "Hến xúc bánh đa Đức Thọ"],
    "Lâm Đồng": ["Bánh ướt lòng gà", "Lẩu bò Ba Toa", "Bánh tráng nướng"],
    "Hạ Long": ["Chả mực", "Gà đồi Tiền Yên", "Cháo hà"],
    "Hải Dương": ["Bánh đậu xanh", "Bánh gai Ninh Giang", "Bánh lòng Kinh Môn"]
  };

  // Function to render results on the page
  function displayResults(city, dishes) {
    resultsContainer.innerHTML = ''; // Clear previous results
    if (dishes && dishes.length > 0) {
      let html = `<h2>Ẩm thực tại ${city}:</h2><ul>`;
      dishes.forEach(dish => {
        html += `<li>${dish}</li>`;
      });
      html += '</ul>';
      resultsContainer.innerHTML = html;
    } else {
      resultsContainer.innerHTML = `<p>Rất tiếc, không tìm thấy món ăn cho "${city}".</p>`;
    }
  }

  // Hàm hiển thị suggestions
  function showSuggestions(filteredCities) {
    suggestionsContainer.innerHTML = '';
    if (filteredCities.length > 0) {
      filteredCities.forEach(city => {
        const div = document.createElement("div");
        div.textContent = city;
        div.style.cssText = `
          padding: 8px;
          cursor: pointer;
          border-bottom: 1px solid #eee;
        `;
        div.addEventListener("click", () => {
          searchInput.value = city;
          hideSuggestions();
          searchBtn.click(); // Trigger search
        });
        suggestionsContainer.appendChild(div);
      });
      suggestionsContainer.style.display = "block";
    } else {
      hideSuggestions();
    }
  }

  // Hàm ẩn suggestions
  function hideSuggestions() {
    suggestionsContainer.style.display = "none";
  }

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      // Normalize input for easier matching (e.g., lowercase)
      const normalizedQuery = query.toLowerCase();
      
      // Basic search logic using the sample data
      const foundCity = Object.keys(foodDataByCity).find(city => 
        city.toLowerCase().includes(normalizedQuery)
      );

      if (foundCity) {
        const dishes = foodDataByCity[foundCity];
        displayResults(foundCity, dishes);
      } else {
        displayResults(query, null); // City not found
      }

    } else {
      alert("Vui lòng nhập tên tỉnh/thành phố cần tìm.");
    }
  });

  // Thêm xử lý khi nhấn Enter trên thanh tìm kiếm
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      hideSuggestions();
      searchBtn.click(); // Trigger click event của button tìm kiếm
    }
  });

  // Event listener cho input để hiển thị suggestions
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
      const filteredCities = Object.keys(foodDataByCity).filter(city =>
        city.toLowerCase().includes(query)
      );
      showSuggestions(filteredCities);
    } else {
      hideSuggestions();
    }
  });

  // Ẩn suggestions khi click outside
  document.addEventListener("click", (event) => {
    if (!searchInput.contains(event.target) && !suggestionsContainer.contains(event.target)) {
      hideSuggestions();
    }
  });
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

  // Event listeners cho menu dropdown
  document.getElementById("login-link")?.addEventListener("click", () => {
    alert("Chuyển sang trang Đăng nhập. (Tạo trang login.html)");
    dropdownMenu.classList.remove("active"); // Ẩn menu sau khi click
  });

  document.getElementById("about-link")?.addEventListener("click", () => {
    alert("Chuyển sang trang Về chúng tôi. (Tạo trang about.html)");
    dropdownMenu.classList.remove("active"); // Ẩn menu sau khi click
  });

  // Ghi chú: Khu vực code quản lý chức năng Mở/Đóng Side Menu đã bị loại bỏ theo yêu cầu mới.
