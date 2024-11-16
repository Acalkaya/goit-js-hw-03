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

console.log(slugify("Geliştirici için İngilizce"));

console.log(slugify("JavaScript'in on sırrı"));

console.log(slugify("İKİ HAFTA içinde GENÇ geliştirici nasıl olunur"));

console.log(slugify("Arrays for beginners"));

console.log(slugify("English for developer"));

console.log(slugify("Ten secrets of JavaScript"));

console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
