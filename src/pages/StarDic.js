import React from 'react';
import StarDicStyle from '../styles/StarDic.module.css'; // CSS 모듈 import
import BottomNav from '../components/BottomNav'; // BottomNav import

function StarDic() {
    return (
        <div className={StarDicStyle.allcontainer}>
            <header className={StarDicStyle.StarDicHeader}>
                <p className={StarDicStyle.title}>별 도감</p>
            </header>
            <main className={StarDicStyle.StarDicmain}>
                <section className={StarDicStyle['first-image']}>
                    <img className={StarDicStyle.StarDicimg} src="/images/stardic.png" alt="First Star" />
                    <p className={StarDicStyle.StarDicp}>살 5kg 감량</p>
                </section>
                <section className={StarDicStyle['second-image']}>
                    <img className={StarDicStyle.StarDicimg} src="/images/stardic.png" alt="Second Star" />
                    <p className={StarDicStyle.StarDicp}>살 5kg 감량</p>
                </section>
                <section className={StarDicStyle['third-image']}>
                    <img className={StarDicStyle.StarDicimg} src="/images/stardic.png" alt="Third Star" />
                    <p className={StarDicStyle.StarDicp}>살 5kg 감량</p>
                </section>
            </main>
            <BottomNav />
        </div>
    );
}

export default StarDic;