const keyName = 'visited';
const keyValue = true;

if (!sessionStorage.getItem(keyName)) {
    sessionStorage.setItem(keyName, keyValue);
    if (window.matchMedia('(max-width: 480px)').matches) {
        window.alert('このサイトの作者は、CSS を完全に理解しています。')
    }
}
