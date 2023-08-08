import React, { useState, useEffect } from 'react';
import './BackToTop.css';

const BackToTop = () => {
    const [showBtn, setShowBtn] = useState(false);

    useEffect (()=>{
        const handleScroll = () => {
            const position = window.scrollY;
            // console.log("scroll: ", position);
            const scrollingUp = position < window.lastScrollTop;
            console.log(position);
            console.log(window.lastScrollTop);
            window.lastScrollTop = position;
            // console.log(scrollingUp);

            setShowBtn(scrollingUp && position > 0);
            // setShowBtn(position > 0);
            // console.log(document.documentElement.scrollY);
        }
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
        <div>

            <h1>Lorem Ipsum</h1>
            <p>Eu quis consectetur elit excepteur ipsum duis ipsum sint qui adipisicing officia amet. Reprehenderit nisi cupidatat magna velit irure duis ad dolor nulla consectetur. Ut veniam id commodo anim elit elit culpa nulla ut. Exercitation voluptate nostrud adipisicing sit ipsum eiusmod eiusmod officia. Consequat cupidatat in in magna ipsum sint minim cillum culpa dolore. Ut qui id pariatur minim eu est cupidatat voluptate reprehenderit sit aute ipsum.Commodo do veniam proident velit ex est. Duis do laborum incididunt mollit Lorem. Eu duis ea et cillum labore mollit culpa. Proident sint ipsum consectetur excepteur est officia magna consequat anim amet duis pariatur. Est consequat ullamco tempor ad occaecat Lorem occaecat nisi nostrud. Reprehenderit id cupidatat eu est ipsum aute laborum enim non duis cupidatat ullamco. Elit eu in id sunt ullamco anim.

Ullamco magna ex do aliquip eiusmod cillum culpa nisi dolore. Est sunt exercitation et exercitation. Sit consectetur consequat proident cupidatat quis elit sit consequat veniam laborum adipisicing commodo. Labore aliqua commodo in id occaecat reprehenderit irure. Esse deserunt qui in veniam consectetur pariatur dolore in minim excepteur. Id laboris amet velit est anim commodo adipisicing tempor exercitation. Proident dolore sit exercitation velit irure culpa ex magna sit anim enim enim nostrud ipsum.

Proident pariatur incididunt anim ad elit non enim proident pariatur consectetur. Consequat ut eu adipisicing anim consectetur ad voluptate pariatur. Ut ea eiusmod Lorem ea enim cupidatat Lorem cupidatat laboris irure amet officia. Veniam eu aliqua est deserunt reprehenderit aute nostrud tempor nulla velit incididunt elit. Pariatur amet voluptate est anim adipisicing reprehenderit officia.

Ullamco minim nulla duis labore quis irure pariatur amet deserunt enim amet eiusmod eu elit. Eu excepteur ullamco aute velit nisi mollit qui. Ea consectetur ullamco laboris nostrud aute. Nulla do amet dolor cupidatat elit qui officia laboris reprehenderit. Laborum Lorem aliqua esse velit laboris commodo commodo nulla consequat culpa labore est anim anim.</p>
        Labore ad incididunt cupidatat duis eu aute aute nisi incididunt incididunt mollit est aliquip excepteur. Proident aliquip elit est laborum sunt quis incididunt veniam tempor velit id sunt. Quis consequat exercitation nostrud enim dolore ut ex aliqua eu. Cupidatat eiusmod consectetur nulla veniam veniam in esse ut.

Enim veniam et aliqua velit fugiat Lorem eiusmod dolor proident esse. Voluptate fugiat id esse nulla ipsum labore consequat est Lorem anim. Eiusmod officia Lorem dolore culpa reprehenderit ad duis occaecat. Sint ad qui non non aliqua ullamco exercitation nisi anim.

Duis laborum laboris commodo consectetur cillum id exercitation culpa aute. Ullamco elit ullamco ex amet labore. Ea amet culpa sit laboris ullamco ad esse magna ut sunt. Aliqua nulla ea id qui pariatur ut ullamco fugiat. Amet minim elit fugiat nulla.

Laborum sunt enim irure est ex ad sint veniam consectetur nostrud duis qui occaecat. Est cillum tempor commodo consequat. Occaecat adipisicing culpa aliquip et minim sunt incididunt exercitation officia aute pariatur. Ea proident id esse cupidatat ipsum incididunt duis cupidatat velit qui aliqua nulla aute eu. Cupidatat ad nostrud exercitation dolor duis. Lorem commodo ullamco excepteur laborum ut nisi adipisicing excepteur dolor aliqua ad.

Incididunt mollit esse qui ex tempor aliqua velit duis et. Reprehenderit sit aute irure Lorem duis labore. Duis est Lorem quis fugiat cillum ea in labore ad labore sit.

Officia dolor ut labore veniam reprehenderit eu enim anim est. Veniam velit id excepteur ullamco deserunt id incididunt consectetur incididunt anim anim non. Veniam in irure aliqua qui adipisicing officia irure minim velit dolor pariatur est. Duis elit est nulla Lorem sunt esse aliqua id.

Enim voluptate nisi ut ex enim adipisicing sint. Est aliqua anim commodo aute sunt. Aute reprehenderit quis amet fugiat deserunt proident.

Aute nisi do aute voluptate. Consequat amet Lorem elit ea anim nulla in nostrud culpa pariatur exercitation nisi ut nostrud. Consequat enim proident eu dolor qui culpa ea proident qui laboris. Culpa ullamco anim incididunt non fugiat quis duis eu anim ex est. Ullamco aliqua occaecat mollit exercitation ea qui fugiat consectetur mollit exercitation officia ullamco ad. Labore pariatur ad nisi velit.

Culpa sunt anim cupidatat adipisicing laborum deserunt sunt enim occaecat dolor nulla aliquip occaecat tempor. Sit amet non aliqua mollit ipsum amet ad nulla mollit ipsum Lorem pariatur aliquip proident. Ad in proident incididunt velit mollit duis aute duis anim esse veniam reprehenderit ad. Lorem in magna culpa quis nisi.

Tempor occaecat occaecat laboris ex excepteur aliquip eu. Tempor ad veniam qui in sit veniam. Nulla ea esse esse incididunt proident eiusmod culpa ut id quis minim. Laboris laborum adipisicing velit voluptate proident laborum ipsum duis adipisicing veniam nulla. Excepteur occaecat culpa exercitation reprehenderit sit qui et magna aliqua pariatur ea tempor. Elit nisi commodo ut non officia enim irure magna veniam aliqua esse. Occaecat ut deserunt qui deserunt consequat minim commodo.
        Aliquip laborum ea ex veniam velit consectetur et. Enim magna officia exercitation laborum commodo anim velit. Veniam occaecat officia irure deserunt reprehenderit nulla voluptate enim magna. Nisi commodo dolore commodo proident deserunt velit veniam eu qui ea in consectetur.

Eiusmod magna officia enim aliqua occaecat nostrud eiusmod enim dolore amet ad magna aliquip. Et dolore ad aute fugiat ullamco ea incididunt commodo aliquip Lorem irure sunt. Aute officia magna elit sit aute ut et tempor est velit dolor nostrud ullamco. Eu velit nulla ea nisi. Esse cillum sit ea minim. Mollit ea commodo cillum veniam aliqua duis sunt.

Veniam consequat sunt ea occaecat ut occaecat quis est pariatur est pariatur sint mollit. Laboris dolore sit duis ex magna excepteur est qui id do ex labore irure. Labore eiusmod exercitation veniam ut aliquip nostrud reprehenderit velit irure ullamco. Id cillum commodo magna consequat ea officia ipsum reprehenderit cupidatat sit enim anim.

Cupidatat amet eu laboris dolor qui do irure laborum anim. Tempor esse elit ut Lorem est dolor eu reprehenderit sint. Elit ex ea sit et quis Lorem fugiat officia Lorem mollit deserunt labore. Mollit pariatur mollit cupidatat ullamco deserunt sint laboris id pariatur tempor ipsum ipsum cillum. Enim sunt commodo exercitation ullamco sit nulla ex deserunt nulla cillum.

Id minim minim nostrud ullamco in consequat dolore veniam cupidatat qui cillum qui. Minim enim dolore ad sint adipisicing. Culpa qui sit consectetur reprehenderit qui esse aute anim reprehenderit et amet proident.
        
        </div>
        <div>
        {showBtn && <button className='backToTop_btn' onClick={scrollToTop}>BackToTop</button>}
        </div>
        </>
    );
};

export default BackToTop;