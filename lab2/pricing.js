let vpnServices = [
    {
        "name": "Basic VPN Plan",
        "description": "Secure and fast VPN connection for one device.",
        "last_updated": "Last updated 2 minutes ago",
        "img": "assets/img/vpn/basic.jpg",
        "price": 5
    },
    {
        "name": "Standard VPN Plan",
        "description": "VPN for multiple devices with medium speed.",
        "last_updated": "Last updated 4 minutes ago",
        "img": "assets/img/vpn/standard.jpg",
        "price": 10
    },
    {
        "name": "Premium VPN Plan",
        "description": "High-speed VPN with unlimited devices and premium support.",
        "last_updated": "Last updated 6 minutes ago",
        "img": "assets/img/vpn/premium.jpg",
        "price": 15
    },
    {
        "name": "Business VPN Plan",
        "description": "VPN for businesses with additional security layers and dedicated support.",
        "last_updated": "Last updated 10 minutes ago",
        "img": "assets/img/vpn/business.jpg",
        "price": 25
    },
    {
        "name": "Enterprise VPN Plan",
        "description": "Custom VPN solutions for large enterprises with special requirements.",
        "last_updated": "Last updated 12 minutes ago",
        "img": "assets/img/vpn/enterprise.jpg",
        "price": 50
    }
];

const addVpnServicesToPage = (array) => {
    const itemsWrapper = document.getElementById('ItemsWrapper');
    const template = document.querySelector('.item-template');

    let child = itemsWrapper.firstChild;
    while (child) {
        const nextSibling = child.nextSibling;
        if (child.nodeType === 1 && child.tagName.toLowerCase() === 'div') {
            itemsWrapper.removeChild(child);
        }
        child = nextSibling;
    }

    array.forEach(service => {
        const clone = template.content.cloneNode(true);

        clone.querySelector('.avatar').style.backgroundImage = `url(${service.img})`;
        clone.querySelector('.h3').textContent = service.name;
        clone.querySelector('.h6').textContent = service.description;
        clone.querySelector('.h5').textContent = service.last_updated;

        itemsWrapper.appendChild(clone);
    });
}

function filterVpnServices(searchTerm) {
    return vpnServices.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

function calculateTotalPrice() {
    document.getElementById('total_price').textContent = vpnServices.reduce((sum, service) => sum + service.price, 0).toString();
}

// Event listeners
document.querySelector('.search-menu form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = event.target.querySelector('input').value;
    const filteredServices = filterVpnServices(searchTerm);
    addVpnServicesToPage(filteredServices);
});

document.querySelector('.clear').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.search-menu input').value = '';
    addVpnServicesToPage(vpnServices);
});

document.getElementById('sort').addEventListener('change', function(event) {
    const sortBy = event.target.value;
    let sortedServices;

    if (sortBy === 'Price') {
        sortedServices = vpnServices.slice().sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Name') {
        sortedServices = vpnServices.slice().sort((a, b) => a.name.localeCompare(b.name));
    }

    addVpnServicesToPage(sortedServices);
});

document.querySelector('.item-count-button').addEventListener('click', function(event) {
    event.preventDefault();
    calculateTotalPrice();
});

// initial load
addVpnServicesToPage(vpnServices);

document.getElementById('pricing-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.open('pricing.html', '_blank', 'width=800,height=600');
});
