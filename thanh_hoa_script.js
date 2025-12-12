// Dữ liệu các đặc sản Thanh Hóa
const specialties = [
    {
        id: 1,
        name: "Nem Chua",
        category: "nem",
        emoji: "🌶️",
        shortDesc: "Nem chua truyền thống được cuốn bằng lá chuối, vị chua nhẹ và giòn",
        fullDesc: "Nem chua chính là món đặc sản đầu tiên nổi tiếng được nhiều người biết đến. Nhờ cách chế biến rất riêng mà nem chua Thanh Hóa luôn dành được sự yêu thích của du khách.\n\nNem được cuốn bằng nhiều lớp lá chuối khác nhau, phần thịt bên trong có màu hồng, được dùng lá ổi và ớt hiểm thái nhỏ, tiêu bỏ vào cùng. Khi ăn vào bạn sẽ thấy nem có vị chua nhẹ, giòn và rất cuốn hút, khiến bạn chỉ muốn ăn mãi không ngừng.",
        address: "Nem Thắng Tuyến - 409 Đường Lê Hoàn, P. Lam Sơn, Thành phố Thanh Hóa hoặc Nem Cương Dũng - 15 Phố Tân An, Phường Ngọc Trạo. Giá: 50.000 - 150.000 VNĐ"
    },
    {
        id: 2,
        name: "Mắm Tép",
        category: "khác",
        emoji: "🦐",
        shortDesc: "Mắm tép Thanh Hóa có hương vị đặc trưng, được làm từ tép tươi",
        fullDesc: "Không nằm ngoài danh sách đặc sản ngon tại Thanh Hóa, mắm tép mang hương vị đặc trưng khiến du khách khi nếm thử phải mê mẩn. Được làm ra từ những con tép mới đánh bắt có độ tươi ngon, sau khi sơ chế sạch sẽ tép sẽ được xay nhuyễn, và ủ lên men với thính để có được thành phẩm là những hủ mắm tép thơm lừng.\n\nKhông gì bằng khi dùng mắm tép chưng chín với mỡ hành, thêm chút ba chỉ thái mỏng ăn cùng cơm dẻo nóng hổi.",
        address: "Mắm tép Ba Làng (Xuân Tiến, Quang Minh, Hải Thượng xã Hải Thanh - Tĩnh Gia) hoặc Mắm tép Đình Trung (xã Yên Dương - Hà Trung). Giá: khoảng 100.000 VNĐ/chai"
    },
    {
        id: 3,
        name: "Chè Lam Phủ Quảng",
        category: "khác",
        emoji: "🍬",
        shortDesc: "Chè lam có vị ngọt nhẹ, được làm từ mật mía, gừng cay và trà xanh",
        fullDesc: "Món ăn này có nguồn gốc từ Phủ Quảng hay còn được gọi là huyện Vĩnh Lộc bây giờ. Thanh chè có một màu vàng ươm thu hút, không gì bằng ngồi ăn chè lam và nhâm nhi chút trà chiều.\n\nChè Lam có mùi thơm đặc trưng, vị ngọt nhẹ và tan ngay đầu lưỡi. Món ăn vặt này hoàn toàn được làm từ mật mía, gừng cay, và trà xanh nên hoàn toàn không ảnh hưởng đến sức khỏe.",
        address: "Các khu chợ Thanh Hóa hoặc vùng Vĩnh Thành (Vĩnh Lộc). Giá: khoảng 20.000 VNĐ/gói"
    },
    {
        id: 4,
        name: "Chẻo Nhệch",
        category: "khác",
        emoji: "🍲",
        shortDesc: "Chẻo nhệch là gỏi nổi tiếng, được làm từ xương cá giã nhuyễn",
        fullDesc: "Chẻo nhệch là tên của một món gỏi nổi tiếng tại khu vực Thanh Hóa có nguồn gốc từ Nga Sơn. Chẻo được làm ra từ phần xương cá giã nhuyễn, sau đó đem đi chưng cùng mẻ chua để tạo nên thành phẩm có màu đỏ và sánh đặc.\n\nKhi thưởng thức sẽ thấy cảm giác giòn giòn, béo béo của chẻo, kết hợp cùng vị cay của gừng, tỏi, ớt, và sự mát từ các loại rau sống, rau rừng lạ miệng. Từ đó tạo nên món ăn mang hương vị hòa quyện rất riêng và đặc biệt.",
        address: "Nhà hàng Vũ Bảo (Quốc lộ 47, Quảng Hồng) hoặc Gỏi Cá Nhệch Nga Sơn - Nhà hàng Thịnh Lịnh. Giá: 300.000 - 320.000 VNĐ/phần"
    },
    {
        id: 5,
        name: "Canh Lá Đắng",
        category: "khác",
        emoji: "🥗",
        shortDesc: "Canh lá đắng của người Mường, nấu từ lá đắng với lòng gà hoặc lợn",
        fullDesc: "Đây là một món canh của người Mường rất nổi tiếng và cũng là một trong những món đặc sản Thanh Hóa nhất định bạn nên thử khi đến đây. Canh được nấu từ loại lá có cùng tên, là thon dài và thường mọc thành các chùm. Sau khi được hái sẽ đem nấu cùng lòng gà, hoặc lòng lợn, thịt nạc.\n\nMón canh mang vị đắng tê tê rất thu hút, sau một vài muỗng quen dần với hương vị thì chắc chắn bạn sẽ nghiện món ăn này bởi mùi vị mà nó mang lại.",
        address: "Phố Lê Lợi, Thanh Hóa hoặc Nhà hàng Lotus (27 Trần Phú Tầng 34, Vinpearl Hotel). Giá: 50.000 - 60.000 VNĐ/phần"
    },
    {
        id: 6,
        name: "Nem Nướng Thanh Hóa",
        category: "nem",
        emoji: "🔥",
        shortDesc: "Nem nướng Thanh Hóa từ vùng Thọ Xuân, vị chua nhẹ xen lẫn vị ngọt",
        fullDesc: "Nếu nem chua nổi tiếng thứ nhất, thì nem nướng Thanh Hóa sẽ là loại đặc sản nổi tiếng tiếp theo mà bạn không nên bỏ qua. Món ăn rất thơm và mang hương vị đặc trưng riêng, có nguồn gốc từ vùng đất Thọ Xuân.\n\nNem được dùng thịt lợn, thính, bì và lá đinh lăng, gói trong lá chuối, sau vài ngày là có thể đem nem đi nướng và thưởng thức. Món nem này có hương vị chua nhẹ, xen lẫn vị ngọt từ bì lợn, cùng mùi thơm đặc trưng khó mà cưỡng lại.",
        address: "Nem nướng - 62 Tô Vĩnh Diện, P. Đông Thọ hoặc Nem Thành Nghĩa - Thị trấn Thọ Xuân. Giá: 40.000 - 50.000 VNĐ/phần"
    },
    {
        id: 7,
        name: "Bánh Cuốn",
        category: "bánh",
        emoji: "🥙",
        shortDesc: "Bánh cuốn Thanh Hóa dai mềm vừa phải, nhân thịt nạc và mộc nhĩ",
        fullDesc: "Cũng là bánh cuốn nhưng tại Thanh Hóa bánh lại có hương vị rất riêng, mà không tỉnh thành nào có được. Phần bánh dai mềm vừa phải, nhân bánh được làm từ thịt nạc, mộc nhĩ rất thơm, sau khi bánh được tráng xong sẽ được phết một lớp hành phi băm nhỏ.\n\nĂn cùng nước mắm được pha theo công thức riêng sẽ mang lại hương vị rất ấn tượng. Bánh cuốn Thanh Hóa là món ăn bình dân, gần gũi mang hương vị riêng của xứ Thanh.",
        address: "Bánh Cuốn Bà Lành - 252 Tống Duy Tân, P. Lam Sơn hoặc Bánh Cuốn Thanh Hoá Nguyễn Trãi - 107 Nguyễn Trãi. Giá: 10.000 - 15.000 VNĐ/đĩa"
    },
    {
        id: 8,
        name: "Bánh Gai Tứ Trụ",
        category: "bánh",
        emoji: "🍢",
        shortDesc: "Bánh gai Tứ Trụ có vỏ dẻo, nhân đậu xanh mịn ngọt",
        fullDesc: "Bánh gai Tứ Trụ là một trong những đặc sản Thanh Hóa được nhiều người biết đến, bánh có phần vỏ dẻo, nhân đậu xanh mịn và ngọt, kết hợp cùng mùi thơm như của chuối. Khi ăn vào hương vị bánh rất vừa phải, không quá ngọt.\n\nMón bánh này có thể mua về làm quà sau khi đi du lịch Thanh Hóa. Tứ Trụ được coi là \"cái nôi\" xuất phát của món bánh này, nên nếu có dịp thì hãy đến đây trải nghiệm nhé.",
        address: "Sao Vàng - Thọ Xuân (được coi là \"cái nôi\" của món bánh). Giá: 5.000 - 7.000 VNĐ/chiếc"
    },
    {
        id: 9,
        name: "Bánh Răng Bừa",
        category: "bánh",
        emoji: "🍛",
        shortDesc: "Bánh lá Thanh Hóa, bánh truyền thống dùng để tiến vua",
        fullDesc: "Bánh răng vừa hay còn được gọi là bánh lá Thanh Hóa, đây là món bánh truyền thống và cũng được biết đến là món ăn được dùng để tiến vua. Bánh được gọi là bánh răng bừa bởi hình dáng tương tự, nguyên liệu chính là bột gạo tẻ và có nhân thịt ba chỉ, mộc nhĩ, hạt tiêu bên trong.\n\nSau đó bánh được gói bằng lá dong xanh, mang đi hấp khoảng 20-30 phút. Khi ăn bạn sẽ thấy bánh mềm, không quá dẻo, kết hợp phần nhân được nêm nếm vừa ăn tạo nên sự hòa quyện độc đáo.",
        address: "Chợ Điện Biên. Giá: khoảng 10.000 VNĐ/chiếc"
    },
    {
        id: 10,
        name: "Bánh Đa Minh Châu",
        category: "bánh",
        emoji: "🥘",
        shortDesc: "Bánh đa được tráng từ bột gạo xay nhuyễn, thêm mè đen",
        fullDesc: "Bánh đa Minh Châu tại Thanh Hóa được làm ra từ bột gạo xay nhuyễn, sau đó bánh được tráng và thêm một chút mè đen để tạo mùi thơm, béo cho món ăn. Không chỉ có thể làm loại bánh ăn vặt, mà du khách có thể ăn bánh đa cùng nhiều món ăn khác như hến xào Sông Chu.\n\nBánh giòn và vị béo bùi, kết hợp cùng thịt hến ngọt được gia giảm vừa miệng. Mang lại món ăn hấp dẫn và ấn tượng cho người ăn trong lần đầu thưởng thức.",
        address: "Các chợ Thanh Hóa hoặc các tạp hóa xung quanh chợ"
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
        'nem': '🌶️ Nem',
        'bánh': '🍞 Bánh',
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
            <h4>📍 Địa Chỉ & Giá Cả</h4>
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
