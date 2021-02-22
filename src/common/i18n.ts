import i18n from 'i18next';
import _ from 'lodash';
import subtag from 'subtag';

i18n.init(
    {
      fallbackLng: 'en',
      resources  : {}
    }
);
const {language, script} = subtag( navigator.language );
const lung_code = _.concat( [language, script] ).filter( Boolean ).join( '-' );
// console.log( lung_code );//en,ja,es,pt, etc....
i18n.changeLanguage( lung_code );

i18n.addResources( 'en', 'translation', {selections_addition: 'Addition'} );
i18n.addResources( 'ja', 'translation', {selections_addition: 'たし算'} );
i18n.addResources( 'es', 'translation', {selections_addition: 'Adición'} );

i18n.addResources( 'en', 'translation', {selections_subtraction: 'Subtraction'} );
i18n.addResources( 'ja', 'translation', {selections_subtraction: 'ひき算'} );
i18n.addResources( 'es', 'translation', {selections_subtraction: 'Sustracción'} );

i18n.addResources( 'en', 'translation', {selections_multiplication: 'Multiplication'} );
i18n.addResources( 'ja', 'translation', {selections_multiplication: 'かけ算'} );
i18n.addResources( 'es', 'translation', {selections_multiplication: 'Multiplicación'} );

i18n.addResources( 'en', 'translation', {selections_division: 'Division'} );
i18n.addResources( 'ja', 'translation', {selections_division: 'わり算'} );
i18n.addResources( 'es', 'translation', {selections_division: 'División'} );

i18n.addResources( 'en', 'translation', {menuList_record: 'Record'} );
i18n.addResources( 'ja', 'translation', {menuList_record: 'ベスト記録'} );
i18n.addResources( 'es', 'translation', {menuList_record: 'Record'} );

i18n.addResources( 'en', 'translation', {menuList_lastResult: 'Last result'} );
i18n.addResources( 'ja', 'translation', {menuList_lastResult: '最終結果'} );
i18n.addResources( 'es', 'translation', {menuList_lastResult: 'Ultimo resultado'} );

i18n.addResources( 'en', 'translation', {levelStartModal_messageB: 'are you ready?'} );
i18n.addResources( 'ja', 'translation', {levelStartModal_messageB: '準備OK？'} );
i18n.addResources( 'es', 'translation', {levelStartModal_messageB: '¿Estás listo?'} );

i18n.addResources( 'en', 'translation', {levelStartModal_start: 'Start!'} );
i18n.addResources( 'ja', 'translation', {levelStartModal_start: 'スタート!'} );
i18n.addResources( 'es', 'translation', {levelStartModal_start: 'Empezar!'} );

i18n.addResources( 'en', 'translation', {exitModal_really: 'Really?'} );
i18n.addResources( 'ja', 'translation', {exitModal_really: 'ホントに？'} );
i18n.addResources( 'es', 'translation', {exitModal_really: 'De Verdad?'} );

i18n.addResources( 'en', 'translation', {exitModal_messageB: 'Result is not saved'} );
i18n.addResources( 'ja', 'translation', {exitModal_messageB: '記録は残らないよ'} );
i18n.addResources( 'es', 'translation', {exitModal_messageB: 'El resultado no se guarda'} );

i18n.addResources( 'en', 'translation', {exitModal_escape: 'Escape'} );
i18n.addResources( 'ja', 'translation', {exitModal_escape: '脱出'} );
i18n.addResources( 'es', 'translation', {exitModal_escape: 'Escapar'} );

i18n.addResources( 'en', 'translation', {successModal_next: 'Next'} );
i18n.addResources( 'ja', 'translation', {successModal_next: '次へ'} );
i18n.addResources( 'es', 'translation', {successModal_next: 'Siguiente'} );

i18n.addResources( 'en', 'translation', {failModal_next: 'Don\'t stop!'} );
i18n.addResources( 'ja', 'translation', {failModal_next: '頑張れ!'} );
i18n.addResources( 'es', 'translation', {failModal_next: '¡Venga Vamos!'} );

i18n.addResources( 'en', 'translation', {total: 'Total'} );
i18n.addResources( 'ja', 'translation', {total: '合計'} );
i18n.addResources( 'es', 'translation', {total: 'Total'} );

i18n.addResources( 'en', 'translation', {goodJob: 'Good job!'} );
i18n.addResources( 'ja', 'translation', {goodJob: 'よくやったね!'} );
i18n.addResources( 'es', 'translation', {goodJob: 'Buen trabajo!'} );

i18n.addResources( 'en', 'translation', {congratulations: 'Congratulations!'} );
i18n.addResources( 'ja', 'translation', {congratulations: 'おめでとう!'} );
i18n.addResources( 'es', 'translation', {congratulations: 'Enhorabuena!'} );

i18n.addResources( 'en', 'translation', {sec: 'sec'} );
i18n.addResources( 'ja', 'translation', {sec: '秒'} );
i18n.addResources( 'es', 'translation', {sec: 's'} );

i18n.addResources( 'en', 'translation', {complete: 'Complete!'} );
i18n.addResources( 'ja', 'translation', {complete: '全問正解!'} );
i18n.addResources( 'es', 'translation', {complete: 'Completar!'} );

i18n.addResources( 'en', 'translation', {newRecord: 'New record!'} );
i18n.addResources( 'ja', 'translation', {newRecord: '新記録更新!'} );
i18n.addResources( 'es', 'translation', {newRecord: 'Nuevo record!'} );

i18n.addResources( 'en', 'translation', {youDidIt: 'You did it!'} );
i18n.addResources( 'ja', 'translation', {youDidIt: 'やったね!'} );
i18n.addResources( 'es', 'translation', {youDidIt: '¡Lo hiciste!'} );

i18n.addResources( 'en', 'translation', {goldMedal: 'Gold medal'} );
i18n.addResources( 'ja', 'translation', {goldMedal: '金メダル'} );
i18n.addResources( 'es', 'translation', {goldMedal: 'Medalla de oro'} );

i18n.addResources( 'en', 'translation', {silverMedal: 'Silver medal'} );
i18n.addResources( 'ja', 'translation', {silverMedal: '銀メダル'} );
i18n.addResources( 'es', 'translation', {silverMedal: 'Medalla de plata'} );

i18n.addResources( 'en', 'translation', {bronzeMedal: 'Bronze medal'} );
i18n.addResources( 'ja', 'translation', {bronzeMedal: '銅メダル'} );
i18n.addResources( 'es', 'translation', {bronzeMedal: 'Medalla de bronce'} );

i18n.addResources( 'en', 'translation', {withInClear: 'Clear within {{sec}} sec!'} );
i18n.addResources( 'ja', 'translation', {withInClear: '{{sec}}秒以内にクリア!'} );
i18n.addResources( 'es', 'translation', {withInClear: 'Borrar en {{sec}} segundos!'} );

i18n.addResources( 'en', 'translation', {playTogether: 'Let\'s play together!'} );
i18n.addResources( 'ja', 'translation', {playTogether: 'みんなで頑張ろう!'} );
i18n.addResources( 'es', 'translation', {playTogether: '¡Juguemos juntos!'} );

export {i18n};
