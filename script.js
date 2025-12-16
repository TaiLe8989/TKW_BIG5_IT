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
    if (
      !hamburgerBtn.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("active");
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    // I. KHAI BÁO BIẾN VÀ PHẦN TỬ DOM

    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const suggestionResults = document.getElementById("suggestion-results");

    // Ghi chú: Đảm bảo phần tử suggestionResults đã được thêm vào layer4.html và style.css

    // ---------------------------------------------------------------------------------
    // Ghi chú: Nơi chèn Tên tỉnh thành và URL liên kết (link file HTML) tương ứng.
    // Dữ liệu 10 tỉnh thành theo yêu cầu:
    const provinces = [
      { name: "Hà Nội", link: "chi-tiet-ha-noi.html" },
      { name: "Hồ Chí Minh", link: "chi-tiet-tphcm.html" },
      { name: "Hải Dương", link: "chi-tiet-hai-duong.html" },
      { name: "Huế", link: "chi-tiet-hue.html" },
      { name: "Đà Nẵng", link: "chi-tiet-da-nang.html" },
      { name: "Thái Nguyên", link: "chi-tiet-thai-nguyen.html" },
      { name: "Thanh Hóa", link: "chi-tiet-thanh-hoa.html" },
      { name: "Hà Tĩnh", link: "chi-tiet-ha-tinh.html" },
      { name: "Lâm Đồng", link: "chi-tiet-lam-dong.html" },
      { name: "Hạ Long", link: "chi-tiet-ha-long.html" },
      // Thêm các tỉnh thành khác vào đây
    ];
    // ---------------------------------------------------------------------------------

    // II. HÀM CHÍNH: HIỂN THỊ GỢI Ý TÌM KIẾM

    function displaySuggestions(query) {
      suggestionResults.innerHTML = "";

      if (query.length === 0) {
        suggestionResults.style.display = "none"; // Ẩn khi input rỗng
        return;
      }

      const queryLower = query.toLowerCase();

      // Lọc danh sách tỉnh thành
      const results = provinces.filter((province) =>
        province.name.toLowerCase().includes(queryLower)
      );

      if (results.length > 0) {
        results.forEach((province) => {
          // Tạo thẻ gợi ý
          const item = document.createElement("div");
          item.classList.add("suggestion-item");
          item.textContent = province.name;

          // Gắn sự kiện CLICK vào Tỉnh thành
          item.addEventListener("click", (e) => {
            e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
            handleSuggestionClick(province);
          });

          suggestionResults.appendChild(item);
        });

        suggestionResults.style.display = "block"; // Hiện khung gợi ý
      } else {
        // Nếu không tìm thấy, hiển thị thông báo
        suggestionResults.innerHTML =
          '<div class="suggestion-item" style="cursor: default;">Không tìm thấy kết quả phù hợp.</div>';
        suggestionResults.style.display = "block";
      }
    }

    // III. HÀM XỬ LÝ SỰ KIỆN

    /**
     * Xử lý khi người dùng nhấp vào một tỉnh thành gợi ý.
     * @param {object} province - Đối tượng tỉnh thành chứa tên và link.
     */
    function handleSuggestionClick(province) {
      // 1. Điền tên tỉnh thành đã chọn vào ô tìm kiếm
      searchInput.value = province.name;

      // 2. Ẩn box gợi ý (quay lại trạng thái ban đầu của box gợi ý)
      suggestionResults.style.display = "none";

      // 3. Thực hiện hành động chuyển trang
      alert(
        `Đã chọn: ${province.name}. Đang chuyển đến link: ${province.link}`
      );
      // Kích hoạt link chuyển trang thực tế:
      // window.location.href = province.link;
    }

    // IV. GẮN SỰ KIỆN CHÍNH

    // 1. Sự kiện GÕ PHÍM (Input): Hiển thị live suggestion
    searchInput.addEventListener("input", (e) => {
      displaySuggestions(e.target.value);
    });

    // 2. Sự kiện MẤT TẬP TRUNG (Blur): ẨN box gợi ý khi click ra ngoài
    // Giữ lại logic này để box gợi ý biến mất sau khi người dùng click ra ngoài, nhưng KHÔNG xóa nội dung.
    searchInput.addEventListener("blur", () => {
      // Đợi 100ms để đảm bảo sự kiện click trên gợi ý (nếu có) được xử lý trước.
      setTimeout(() => {
        suggestionResults.style.display = "none";
      }, 100);
    });

    // Ngăn chặn sự kiện blur khi click vào khu vực gợi ý (để người dùng chọn được)
    suggestionResults.addEventListener("mousedown", (e) => {
      e.preventDefault();
    });

    // V. LOGIC KHÁC

    // Gắn sự kiện cho nút "Tìm kiếm"
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        alert(`Đang tìm kiếm chính thức cho: "${query}".`);
      } else {
        alert("Vui lòng nhập tên tỉnh/thành phố cần tìm.");
      }
      suggestionResults.style.display = "none";
    });

    // Ghi chú: Chức năng đăng nhập/đăng ký
    document.getElementById("signin-btn")?.addEventListener("click", () => {
      alert(
        "Chuyển sang trang Đăng nhập/Đăng ký. (Bạn cần tạo trang Đăng ký/Đăng nhập và liên kết tại đây)."
      );
    });
  });
});

// Ghi chú: Khu vực code quản lý chức năng Mở/Đóng Side Menu đã bị loại bỏ theo yêu cầu mới.
//15-12-2025: script o tim kiem
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a,
      b,
      i,
      val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var countries = [
  "Hà Nội",
  "Huế",
  "Lâm Đồng",
  "thành phố Hồ Chí Minh",
  "HCM",
  "Hải Dương",
  "Hạ Long",
  "Hà Tĩnh",
  "Đà Nẵng",
  "Thanh Hóa",
  "Hồ Chí Minh",
  "Thái Nguyên",
];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), countries);

$("#search_form").on("submit", function (event) {
  if (
    $("#myInput").first().val() === "Ha noi" ||
    $("#myInput").first().val() === "Hà Nội"
  ) {
    window.location.href = "http://127.0.0.1:5500/hanoi.html";
    return false;
  }
  if (
    $("#myInput").first().val() === "huế" ||
    $("#myInput").first().val() === "Huế"
  ) {
    window.location.href = "http://127.0.0.1:5500/hue.html";
    return false;
  }
  if (
    $("#myInput").first().val() === "lâm đồng" ||
    $("#myInput").first().val() === "Lâm Đồng"
  ) {
    window.location.href = "http://127.0.0.1:5500/lamdong.html";
    return false;
  }
  if (
    $("#myInput").first().val() === "HCM" ||
    $("#myInput").first().val() === "thành phố Hồ Chí Minh" ||
    $("#myInput").first().val() === "Hồ Chí Minh"
  ) {
    window.location.href = "http://127.0.0.1:5500/tphcm.html";
    return false;
  }
  if (
    $("#myInput").first().val() === "Hải Dương" ||
    $("#myInput").first().val() === "hai duong"
  ) {
    window.location.href = "http://127.0.0.1:5500/haiduong.html";
    return false;
  }
  if (
    $("#myInput").first().val() === "ha long" ||
    $("#myInput").first().val() === "Hạ Long"
  ) {
    window.location.href = "http://127.0.0.1:5500/halong.html";
    return false;
  }
  if (
    $("#myInput").first().val() === "ha tinh" ||
    $("#myInput").first().val() === "Hà Tĩnh"
  ) {
    window.location.href = "http://127.0.0.1:5500/hatinh.html";
    return false;
  }
  if (
    $("#myInput").first().val() === "đà nẵng" ||
    $("#myInput").first().val() === "Đà Nẵng"
  ) {
    window.location.href = "http://127.0.0.1:5500/danang.html";
    return false;
  }
  if (
    $("#myInput").first().val() === "thanh hoa" ||
    $("#myInput").first().val() === "Thanh Hóa"
  ) {
    window.location.href = "http://127.0.0.1:5500/thanhhoa.html";
    return false;
  }
  if (
    $("#myInput").first().val() === "thai nguyên" ||
    $("#myInput").first().val() === "Thái Nguyên"
  ) {
    window.location.href = "http://127.0.0.1:5500/thainguyen.html";
    return false;
  }
});
//login/register
// Function to get user data from localStorage
function getUsersFromLocalStorage() {
  const storedUsers = localStorage.getItem("users");
  return storedUsers ? JSON.parse(storedUsers) : [];
}

// Function to save user data to localStorage
function saveUsersToLocalStorage(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Array to store registered users
let users = getUsersFromLocalStorage();
console.log(users);
// Function to register a new user
function registerUser() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  // Validate empty
  if (username == "") {
    alert("Username not empty. Please try again.");
    return;
  }

  if (email == "") {
    alert("Email not empty. Please try again.");
    return;
  }
  // Validate password match
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  // Validate unique email
  if (isEmailUnique(email)) {
    alert("Email is already registered. Please use a different email.");
    return;
  }

  // Validate unique phone number
  if (isPhoneNumberUnique(phoneNumber)) {
    alert("Phone number is already registered. Please use a different number.");
    return;
  }

  // Create a new user object
  const newUser = {
    id: generateUniqueId(),
    username,
    email,
    password,
    phoneNumber,
  };

  // Add the new user to the array
  users.push(newUser);
  console.log(users);
  saveUsersToLocalStorage(users);
  // Display success message (you can modify this as needed)
  alert("Registration successful!");

  // Clear the form
  document.getElementById("registrationForm").reset();
  window.location.href = "login.html";
}

// Function to check if the email is unique
function isEmailUnique(email) {
  return users.some((user) => user.email === email);
}

// Function to check if the phone number is unique
function isPhoneNumberUnique(phoneNumber) {
  return users.some((user) => user.phoneNumber === phoneNumber);
}

// Function to generate a unique ID (simple increment for demonstration purposes)
function generateUniqueId() {
  return users.length + 1;
}

///login page
function login() {
  console.log(users);
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  // Check if there is a user with the provided email
  const user = users.find((user) => user.email === loginEmail);

  // If no user found or password is incorrect, show an alert
  if (!user || user.password !== loginPassword) {
    alert("Invalid email or password. Please try again.");
    return;
  }
  // If login is successful, store user information in sessionStorage
  localStorage.setItem("loggedInUser", JSON.stringify(user));

  // If login is successful, redirect to another page (e.g., welcome.html)
  window.location.href = "index.html";
}
