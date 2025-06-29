document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery img');
    const imagePopup = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');
    const popupIntro = document.getElementById('popup-intro');

    // 各画像にクリックイベントリスナーを設定
    galleryImages.forEach(image => {
        image.addEventListener('click', (event) => {
            const fullImageUrl = event.target.dataset.full; // data-full属性からフルサイズの画像パスを取得
            if (fullImageUrl) {
                popupImage.src = fullImageUrl; // ポップアップの画像ソースを設定
                imagePopup.style.display = 'flex'; // ポップアップを表示
                popupIntro.textContent = event.target.alt || '画像の説明がありません'; // alt属性から説明を取得
            }
        });
    });

    // ポップアップのオーバーレイ部分をクリックで閉じる
    imagePopup.addEventListener('click', (event) => {
        // クリックされた要素がポップアップ画像自体ではない場合、またはその親要素（popup-content）ではない場合
        // つまり、背景のオーバーレイ部分がクリックされた場合
        if (event.target === imagePopup) {
            imagePopup.style.display = 'none'; // ポップアップを非表示にする
            popupImage.src = ''; // 画像ソースをクリアしておく（メモリ最適化のため）
        }
    });
});


