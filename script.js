// Dữ liệu các đặc sản Thái Nguyên
const specialties = [
    {
        id: 1,
        name: "Bánh Chưng Bờ Đậu",
        category: "bánh",
        emoji: "📦",
        shortDesc: "Bánh chưng truyền thống không dùng khuôn nhưng vô cùng vuông vắn",
        fullDesc: "Bánh chưng Bờ Đậu không dùng khuôn mà vẫn \"vuông thành sắc cạnh\", đều tăm tắp trăm cái như một. Bí quyết làm nên hương vị \"danh bất hư truyền\" của bánh chưng Bờ Đậu là loại gạo nếp dẻo thơm của Định Hóa. Ngoài bánh chưng truyền thống, người dân còn gói bánh chưng gấc; bánh chưng cẩm… để đáp ứng nhu cầu ngày càng đa dạng của thị trường.\n\nBánh chưng Bờ Đậu rất được yêu thích vào dịp Tết.",
        address: "Các khu chợ hoặc cửa hàng ở xã Cổ Lũng, huyện Phú Lương, Thái Nguyên"
    },
    {
        id: 2,
        name: "Chè Tân Cương",
        category: "chè",
        emoji: "🍵",
        shortDesc: "Thái Nguyên được mệnh danh là \"đệ nhất danh trà\" của đất nước",
        fullDesc: "Thái Nguyên được mệnh danh là \"đệ nhất danh trà\", là vùng chè nổi tiếng nhất nhì cả nước. Thổ nhưỡng và khí hậu nơi đây giúp cây trà sinh trưởng tốt, búp chè mập. Chè Tân Cương có đặc điểm nước chè trong, màu xanh ngả vàng nhạt và sánh. Khi thưởng thức, ta cảm nhận được vị chát có ngọt hậu hài hòa và rất ít vị đắng.",
        address: "HTX chè Thanh Lương, Tân Thái, Đại Từ, Thái Nguyên (gần cổng khu du lịch Hồ Núi Cốc)"
    },
    {
        id: 3,
        name: "Nem Chua Đại Từ",
        category: "khác",
        emoji: "🌶️",
        shortDesc: "Nem chua đặc sản Thái Nguyên làm từ thịt nạc mông",
        fullDesc: "Nem chua Đại Từ cũng là một đặc sản Thái Nguyên được nhiều người biết tới. Nguyên liệu làm nem gồm thịt lợn, tỏi, hạt tiêu, thính, lá ổi và rượu. Bí quyết làm nên vị ngon đặc biệt của nem chua Đại Từ là người làm chỉ sử dụng thịt nạc mông. Nem được gói bằng lá chuối, để vài ngày là chín tới nên được nhiều du khách mua làm quà.",
        address: "3 xã Văn Yên, Ký Phú và Yên Mỹ là nơi sản xuất nem chua Đại Từ nhiều nhất"
    },
    {
        id: 4,
        name: "Bánh Cóoc Mò",
        category: "bánh",
        emoji: "🎺",
        shortDesc: "Bánh đặc sản của đồng bào dân tộc Tày, Nùng có hình sừng bò",
        fullDesc: "Cóoc mò trong tiếng Tày có nghĩa là sừng bò. Loại bánh này được làm bằng gạo nếp giã với lạc, hòa cùng nước suối trong và gói lại thành hình chiếc sừng bò bằng lá dong hoặc lá chuối. Bánh không có nhân mặn như nhiều loại bánh khác nhưng có vị bùi, béo của lạc, ăn hoài không ngán.",
        address: "Các phiên chợ của người Tày, Nùng - Trung tâm thương mại Đồng Quang, Hoàng Văn Thụ, Thái Nguyên"
    },
    {
        id: 5,
        name: "Bánh Ngải",
        category: "bánh",
        emoji: "🍰",
        shortDesc: "Bánh nếp hương với lá ngải, ngon nhất là bánh ngải nhân trứng kiến",
        fullDesc: "Bánh ngải là món ăn không thể thiếu trên bản đồ ẩm thực Thái Nguyên. Bánh được làm từ nếp hương. Bột bánh được giã cùng lá ngải để tạo hương vị đặc biệt và màu đẹp mắt. Có loại bánh ngải không nhân, bánh ngải nhân vừng và ngon nhất là bánh ngải nhân trứng kiến. Loại bánh này ngọt vừa, tốt cho sức khỏe, ăn nhiều không nóng như các loại bánh nếp khác.",
        address: "Thị trấn Chợ Chu, Huyện Định Hóa, Thái Nguyên - Chủ yếu xuất hiện tại 3 huyện: Phú Lương, Định Hóa, Võ Nhai"
    },
    {
        id: 6,
        name: "Bánh Trứng Kiến",
        category: "bánh",
        emoji: "🐜",
        shortDesc: "Đặc sản nức tiếng của Định Hóa được làm từ trứng kiến rừng",
        fullDesc: "Không chỉ là một món ăn độc đáo của đồng bào dân tộc Tày ở Định Hóa, bánh trứng kiến còn là một đặc sản Thái Nguyên nức tiếng gần xa. Bánh được làm từ bột gạo nếp, trứng kiến đen và lá vả. Từ tháng 4 đến tháng 5 hàng năm, bà con lại vào rừng kiếm trứng kiến đen mang về làm bánh. Bánh trứng kiến dẻo thơm bột nếp, bùi bùi lá vả, béo ngậy trứng kiến rừng ăn lạ miệng vô cùng.",
        address: "Khu di tích lịch sử ATK Định Hóa, Thái Nguyên"
    },
    {
        id: 7,
        name: "Cơm Lam Định Hóa",
        category: "khác",
        emoji: "🍚",
        shortDesc: "Cơm nấu từ gạo nếp trong ống nứa, tre non nướng trên lửa",
        fullDesc: "Cơm lam Định Hóa được nấu từ gạo nếp ngon. Gạo được cho vào ống nứa, ống tre non lấy từ núi rừng Định Hóa rồi nướng đều tay trên bếp lửa. Khi chín, cơm lam vừa thơm mùi nếp, vừa thơm mùi tre nứa. Món này ăn kèm muối vừng, gà nướng thì bao nhiêu cũng hết. Nhiều du khách có dịp đi qua Định Hóa đều muốn mua món cơm dân dã này về làm quà.",
        address: "Khu du lịch Hồ Núi Cốc, Thái Nguyên"
    },
    {
        id: 8,
        name: "Tương Nếp Úc Kỳ",
        category: "khác",
        emoji: "🫙",
        shortDesc: "Sản vật làm bằng giống gạo nếp thầu dầu độc nhất tại xã Úc Kỳ",
        fullDesc: "Đây là sản vật được bàn tay khéo léo của người dân xã Úc Kỳ (huyện Phú Bình) làm ra. Vẫn là những nguyên liệu quen thuộc giống các làng nghề làm tương khác như gạo nếp, đỗ tương, muối trắng. Nhưng bí quyết làm nên hương vị thơm ngon đặc trưng của tương nếp Úc Kỳ chính là giống gạo nếp thầu dầu - chỉ được trồng ở 2 xã Úc Kỳ và Xuân Phương. Tương thành phẩm mềm, nhuyễn và có màu vàng óng. Từ đó nó trở thành đặc sản theo chân du khách đi khắp muôn nơi.",
        address: "Tương nếp Úc Kỳ (xóm Nam 1, xã Úc Kỳ, Phú Bình, Thái Nguyên)"
    }
];

// DOM Elements
const specialtiesGrid = document.getElementById('specialtiesGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');
const contactForm = document.getElementById('contactForm');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displaySpecialties('all');
    setupEventListeners();
});

// Display Specialties
function displaySpecialties(filter) {
    specialtiesGrid.innerHTML = '';

    const filtered = filter === 'all'
        ? specialties
        : specialties.filter(item => item.category === filter);

    filtered.forEach(item => {
        const card = createCard(item);
        specialtiesGrid.appendChild(card);
        // Trigger animation
        setTimeout(() => {
            card.classList.add('show');
        }, 10);
    });
}

// Create Card Element
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'specialty-card';
    card.innerHTML = `
        <div class="specialty-image">${item.emoji}</div>
        <div class="specialty-content">
            <h3>${item.name}</h3>
            <span class="category">${getCategoryName(item.category)}</span>
            <p>${item.shortDesc}</p>
            <button class="btn" onclick="openModal('${item.id}')">Xem Chi Tiết</button>
        </div>
    `;
    return card;
}

// Get Category Name
function getCategoryName(category) {
    const names = {
        'bánh': '🍞 Bánh',
        'chè': '🍵 Chè',
        'khác': '🍲 Khác'
    };
    return names[category] || category;
}

// Open Modal
function openModal(id) {
    const item = specialties.find(s => s.id == id);
    if (!item) return;

    modalBody.innerHTML = `
        <h2 class="modal-detail-title">${item.emoji} ${item.name}</h2>
        <div class="modal-detail-text">
            ${item.fullDesc.split('\n').map(p => `<p>${p}</p>`).join('')}
        </div>
        <div class="modal-detail-address">
            <h4>📍 Địa Chỉ Tham Khảo</h4>
            <p>${item.address}</p>
        </div>
    `;
    modal.style.display = 'block';
}

// Close Modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Filter Functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        // Filter specialties
        const filter = btn.getAttribute('data-filter');
        displaySpecialties(filter);
    });
});

// Setup Event Listeners
function setupEventListeners() {
    // Contact Form
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
        contactForm.reset();
    });

    // Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Hamburger Menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Add active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
