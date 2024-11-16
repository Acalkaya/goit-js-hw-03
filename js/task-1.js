function slugify(title) {
    return title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/^-+|-+$/g, '');
}
console.log(slugify("Başlayanlar için diziler"));
// Beklenen Çıktı: "başlayanlar-için-diziler"

console.log(slugify("Geliştirici için İngilizce"));
// Beklenen Çıktı: "geliştirici-için-ingilizce"

console.log(slugify("JavaScript'in on sırrı"));
// Beklenen Çıktı: "on-sırrı-javascript"

console.log(slugify("İKİ HAFTA içinde GENÇ geliştirici nasıl olunur"));
// Beklenen Çıktı: "iki-hafta-içinde-genç-geliştirici-nasıl-olunur"

console.log(slugify("Arrays for beginners"));
// Beklenen Çıktı: "arrays-for-beginners"

console.log(slugify("English for developer"));
// Beklenen Çıktı: "english-for-developer"

console.log(slugify("Ten secrets of JavaScript"));
// Beklenen Çıktı: "ten-secrets-of-javascript"

console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
// Beklenen Çıktı: "how-to-become-a-junior-developer-in-two-weeks"
