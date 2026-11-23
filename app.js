
const products = [
    {
        id: 1,
        name: "Gentle Cleanser",
        category: "Cleansing",
        price: 32,
        rating: 4.8,
        image: "https://pub-75de598aba1c45faa2b7c57c5f262f78.r2.dev/assets3/20260422180824_8831_122_1776853846351_ql9i9v.webp"
    },
    {
        id: 2,
        name: "Glow Serum",
        category: "Serum",
        price: 48,
        rating: 4.9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIlMGVaBGO78ZCQLAC6-Qr39fyMMSoOS6jua9Ig9MCSdNM6TfyAvfhsk&s=10"
    },
    {
        id: 3,
        name: "Daily Moisturizer",
        category: "Moisturizing",
        price: 39,
        rating: 4.7,
        image: "https://i.pinimg.com/736x/1b/a5/d3/1ba5d3219ad10ff55076694f6fa433c3.jpg"
    },
    {
        id: 4,
        name: "Sun Shield SPF 50",
        category: "Sun Care",
        price: 29,
        rating: 4.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6Bakg6XP3MW2yV5Ip0ce2vJ13GcuNC-NrY-UIi-IDJrDRATZAftVAqo&s=10"
    },
    {
        id: 5,
        name: "Sun Shield SPF 50",
        category: "Sun Care",
        price: 29,
        rating: 4.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJtPai9Q5fJwvGZzjvG7JaMtSkhvZdbnn_UEqS1GxUw3BDRNcUQrNy1Q&s=10"
    },
    {
        id: 6,
        name: "Sun Shield SPF 50",
        category: "Sun Care",
        price: 29,
        rating: 4.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5BFvfUTsPkzHxJiGuANCL1Ux7hm95w9W_KdT3YAb0A&s=10"
    },
       {
        id: 7,
        name: "Sun Shield SPF 50",
        category: "Sun Care",
        price: 29,
        rating: 4.8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKB4E66iOr_kbrhhgMlMhGQwQ5FE42JTxJ98gXd8WJ-GWmjeExoS-HxZ6&s=10"
    },
       {
        id: 8,
        name: "Sun Shield SPF 50",
        category: "Sun Care",
        price: 29,
        rating: 4.8,
        image: "https://cdn.files.salla.network/homepage/171683104/4416fcde-35a9-495c-97d8-be622ba9d817-original.webp"
    }
];

const productContainer = document.getElementById("product-container");

products.forEach(product => {
    productContainer.innerHTML += `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="">
                <span class="product-category">${product.category}</span>
            </div>

            <div class="pt-4">
                <div class="flex justify-between items-center">
                    <h3 class="font-medium">${product.name}</h3>
                    <span class="text-sm">★ ${product.rating}</span>
                </div>

                <div class="flex justify-between items-center mt-3">
                    <p class="text-lg font-semibold">$${product.price}</p>
                    <button class="add-button">Add to bag +</button>
                </div>
            </div>
        </div>
    `;
});
