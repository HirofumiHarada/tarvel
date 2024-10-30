import {
  Sparkles,
  Briefcase,
  Star,
  Shield,
  Package,
  Shirt,
  Plane,
  Bed,
  Laptop
} from 'lucide-react';

export const countrySpecificInfo = {
  us: {
    voltage: "120V/60Hz。日本の電化製品はほとんどそのまま使えます。プラグはAタイプ（日本と同じ形状）が主流です。",
    passport: "残存有効期間は入国時から6ヶ月以上必要。機械読取式パスポート(MRP)または電子パスポートが必要です。",
    visa: "ESTA(電子渡航認証)の事前申請が必要。観光目的の場合、最大90日間の滞在が可能です。",
  },
  fr: {
    voltage: "230V/50Hz。変圧器とプラグアダプター（Cタイプ、Eタイプ）が必要です。",
    passport: "シェンゲン協定加盟国出国予定日から3ヶ月以上の残存有効期間が必要。",
    visa: "90日以内の観光目的の場合、ビザ不要。シェンゲン協定加盟国内での滞在は180日間中最大90日まで。",
  },
  uk: {
    voltage: "230V/50Hz。プラグはGタイプ（三角配列の三叉型）。変圧器とプラグアダプターが必要です。",
    passport: "入国時に6ヶ月以上の残存有効期間が必要。",
    visa: "観光目的の場合、最大6ヶ月間のビザなし滞在が可能です。",
  },
  au: {
    voltage: "230V/50Hz。プラグはIタイプ。変圧器とプラグアダプターが必要です。",
    passport: "滞在予定期間+6ヶ月以上の残存有効期間が必要。",
    visa: "ETA（電子渡航許可）の事前申請が必要。観光目的の場合、最大3ヶ月間の滞在が可能。",
  }
};

export const countries = [
  { id: 'us', name: 'アメリカ', cities: ['ニューヨーク', 'ロサンゼルス', 'サンフランシスコ'] },
  { id: 'fr', name: 'フランス', cities: ['パリ', 'マルセイユ', 'リヨン'] },
  { id: 'uk', name: 'イギリス', cities: ['ロンドン', 'マンチェスター', 'エディンバラ'] },
  { id: 'au', name: 'オーストラリア', cities: ['シドニー', 'メルボルン', 'ブリスベン'] },
];

export const purposes = [
  { id: 'travel', name: '旅行', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'business', name: '出張', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'study', name: '留学', icon: <Star className="w-4 h-4" /> },
];

export const categories = [
  {
    name: "必需品",
    icon: <Shield className="w-5 h-5" />,
    color: "red",
    forPurpose: ['travel', 'business', 'study'],
    items: [
      {
        name: "パスポート",
        description: "渡航先の必要な残存有効期間を確認し、コピーを別持ちすることをお勧めします。スマートフォンでの写真保存も有効です。万が一の紛失に備え、日本大使館の連絡先も控えておきましょう。",
        essential: true,
        requiresCountrySpecific: true,
        forPurpose: ['travel', 'business', 'study'],
        productId: 'passport_case'
      },
      {
        name: "ビザ",
        description: "渡航先の入国要件を確認し、必要な場合は余裕を持って申請しましょう。オンラインでの事前申請が必要な国も増えています。申請方法や必要書類は大使館のウェブサイトで確認できます。",
        essential: true,
        requiresCountrySpecific: true,
        forPurpose: ['travel', 'business', 'study'],
        productId: 'visa'
      },
      {
        name: "クレジットカード",
        description: "海外での支払いに必須のアイテム。利用前に海外利用設定と限度額の確認が必要です。暗証番号は必ずメモしておきましょう。緊急時の連絡先も控えておくことをお勧めします。",
        essential: true,
        productId: 'credit_card',
        forPurpose: ['travel', 'business', 'study'],
        additionalInfo: {
          title: "クレジットカード選びのポイント",
          content: [
            "海外旅行保険が自動付帯されているカードを選択",
            "国際ブランド（VISAやMasterCard）の知名度",
            "年会費と為替手数料の確認",
            "緊急時の日本語サポート体制",
            "利用可能国と地域の確認"
          ],
          warning: "※メインカードと予備カードは別々に保管することをお勧めします。"
        }
      },
      {
        name: "財布",
        description: "スキミング防止機能付きのものが推奨です。現金は分散して持ち歩き、バックポケットは避けましょう。貴重品の管理に便利なセキュリティポケット付きもおすすめです。",
        essential: true,
        forPurpose: ['travel', 'business', 'study'],
        productId: 'wallet'
      },
      {
        name: "現金(日本円)",
        description: "緊急時用に2-3万円程度用意しておくと安心です。大きな紙幣は避け、1万円札を数枚程度持参することをお勧めします。",
        essential: true,
        forPurpose: ['travel', 'business', 'study'],
        productId: 'japanese_cash'
      },
      {
        name: "現地通貨",
        description: "到着直後の交通費や食事代用に必要最小限を用意。主要空港や街中のATMで現地通貨を引き出すのも効率的です。",
        essential: true,
        forPurpose: ['travel', 'business', 'study'],
        productId: 'local_currency'
      },
      {
        name: "スマートフォン",
        description: "渡航前に海外利用設定とデータローミングの確認を。地図や翻訳アプリの事前ダウンロードもお忘れなく。防水ケースの携帯もお勧めです。",
        essential: true,
        forPurpose: ['travel', 'business', 'study'],
        productId: 'smartphone'
      },
      {
        name: "ポケットWiFi",
        description: "インターネット接続の確保に必要不可欠。地図アプリやコミュニケーションツールの利用に重宝します。",
        productId: 'travel_wifi',
        forPurpose: ['travel', 'business', 'study'],
        additionalInfo: {
          title: "WiFiレンタルのチェックポイント",
          content: [
            "渡航先での通信速度と対応エリアの確認",
            "1日あたりの通信容量制限の確認",
            "バッテリー持続時間の確認",
            "複数デバイスの同時接続可否",
            "受取・返却方法の確認"
          ],
          warning: "※大容量プランでも動画視聴は通信容量を消費しやすいため注意が必要です。"
        }
      },
      {
        name: "海外旅行保険",
        description: "思わぬ事態に備える必需品。クレジットカードの付帯保険だけでは補償が不十分な場合も。",
        essential: true,
        productId: 'travel_insurance',
        forPurpose: ['travel', 'business', 'study'],
        additionalInfo: {
          title: "海外旅行保険の重要ポイント",
          content: [
            "治療・救援費用は3,000万円以上を推奨",
            "携行品損害の補償内容確認",
            "感染症関連の補償有無の確認",
            "既往症がある場合の適用可否確認",
            "保険会社の24時間サポート体制確認"
          ],
          warning: "※加入証明書は印刷して持参し、緊急連絡先は必ず控えておきましょう。"
        }
      },
      {
        name: "航空券",
        description: "スマートフォンに保存とプリントアウト両方の準備を。予約番号やマイレージ番号もメモしておくと便利です。",
        essential: true,
        forPurpose: ['travel', 'business', 'study'],
        productId: 'air_ticket'
      },
      {
        name: "変換プラグ",
        description: "渡航先のコンセント形状を確認し、適合するアダプターを用意。USB端子付きのマルチタイプが便利です。予備もあると安心です。",
        essential: true,
        requiresCountrySpecific: true,
        productId: 'power_adapter',
        forPurpose: ['travel', 'business', 'study']
      },
      {
        name: "常備薬",
        description: "処方薬は医師の診断書（英文）と共に持参。市販薬は胃薬、痛み止め、絆創膏などの基本的なものを。",
        essential: true,
        productId: 'medicine_kit',
        forPurpose: ['travel', 'business', 'study']
      }
    ]
  },

  {
    name: "荷造り用品",
    icon: <Package className="w-5 h-5" />,
    color: "blue",
    forPurpose: ['travel', 'business', 'study'],
    items: [
      {
        name: "スーツケース",
        description: "機内持込サイズか預け入れか用途に応じて選択。TSAロック付きで軽量なものがおすすめ。買い物の予定がある場合は少し大きめのサイズを。",
        essential: true,
        productId: 'suitcase',
        forPurpose: ['travel', 'business', 'study']
      },
      {
        name: "スーツケースベルト",
        description: "スーツケースの開閉防止と識別に便利。目立つ色を選ぶと荷物取り間違い防止にも効果的です。",
        productId: 'suitcase_belt',
        forPurpose: ['travel', 'business', 'study']
      },
      {
        name: "サブバック",
        description: "機内や観光時の貴重品管理用。折りたたみ式があると帰国時のお土産の持ち運びにも便利です。",
        productId: 'sub_bag',
        forPurpose: ['travel', 'business', 'study']
      },
      {
        name: "ネームタグ",
        description: "スーツケースの識別と紛失時の連絡先として。現地の連絡先も記入できるものがおすすめです。",
        productId: 'name_tag',
        forPurpose: ['travel', 'business', 'study']
      },
      {
        name: "南京錠・ワイヤーロック",
        description: "貴重品の盗難防止に。TSAロックと併用することでより安全性が高まります。",
        productId: 'lock',
        forPurpose: ['travel', 'business', 'study']
      },
      {
        name: "トラベルポーチ",
        description: "衣類や小物の仕分けに便利。中身が見えるメッシュタイプだと管理が簡単です。",
        productId: 'travel_pouch',
        forPurpose: ['travel', 'business', 'study']
      },
      {
        name: "圧縮袋",
        description: "衣類の収納スペースを節約。ポンプ式より手で空気を抜けるタイプが扱いやすくおすすめです。",
        productId: 'compression_bag',
        forPurpose: ['travel', 'business', 'study']
      }
    ]
  },
  {
    name: "衣類",
    icon: <Shirt className="w-5 h-5" />,
    color: "pink",
    forPurpose: ['travel', 'business', 'study'],
    items: [
      {
        name: "トップス",
        description: "現地の気候と活動内容に応じて選択。シワになりにくい素材がおすすめ。重ね着できるアイテムを中心に。",
        forPurpose: ['travel', 'business', 'study'],
        productId: 'tops'
      },
      {
        name: "ボトムス",
        description: "動きやすく、多様なシーンで着回せるものを選択。長時間の移動も考慮した素材選びを。",
        forPurpose: ['travel', 'business', 'study'],
        productId: 'bottoms'
      },
      {
        name: "下着",
        description: "滞在日数分に予備2-3日分を追加。速乾性の高い素材だと洗濯も楽で便利です。",
        forPurpose: ['travel', 'business', 'study'],
        productId: 'underwear'
      },
      {
        name: "靴下",
        description: "履き心地の良い物を選択。長時間の歩行に備えて予備も必須。綿素材より速乾性素材がおすすめ。",
        forPurpose: ['travel', 'business', 'study'],
        productId: 'socks'
      },
      {
        name: "パジャマ",
        description: "薄手で軽量なものを選択。ホテルによってはナイトウェアの貸出もあります。",
        forPurpose: ['travel', 'business', 'study'],
        productId: 'pajamas'
      },
      {
        name: "タオル",
        description: "速乾性の高いものを選択。フェイスタオルは必須、バスタオルはホテルのものを利用可。",
        productId: 'quick_dry_towel',
        forPurpose: ['travel', 'business', 'study']
      },
      {
        name: "帽子",
        description: "現地の気候に応じて準備。日差しの強い地域では必須アイテム。折りたためるタイプが便利。",
        forPurpose: ['travel', 'study'],
        productId: 'hat'
      },
      {
        name: "雨具",
        description: "折りたたみ傘やレインコートは必須。現地で購入することも可能ですが、日本製の方が品質は良好です。",
        productId: 'umbrella',
        forPurpose: ['travel', 'business', 'study']
      }
    ]
  },

  {
    name: "機内持ち物",
    icon: <Plane className="w-5 h-5" />,
    color: "purple",
    forPurpose: ['travel', 'business', 'study'],
    items: [
      {
        name: "首枕・腰枕",
        description: "長時間フライトの快適性を確保。空気で膨らませるタイプは荷物のスペースを取らず便利です。",
        productId: 'neck_pillow',
        forPurpose: ['travel', 'business', 'study']
      },
      {
        name: "アイマスク",
        description: "機内での睡眠の質を向上。光を完全に遮断できる形状で、締め付けが優しいものがおすすめです。",
        productId: 'eye_mask',
        forPurpose: ['travel', 'business', 'study']
      },
      {
        name: "耳栓",
        description: "機内の騒音対策に必須。使い捨てタイプと繰り返し使えるタイプがあり、好みで選択してください。",
        productId: 'ear_plugs',
        forPurpose: ['travel', 'business', 'study']
      },
      {
        name: "使い捨てスリッパ",
        description: "機内でのトイレ利用時に便利。薄手で場所を取らないものを選びましょう。",
        forPurpose: ['travel', 'business', 'study'],
        productId: 'disposable_slippers'
      },
      {
        name: "マスク",
        description: "長時間の着用でも耳が痛くならないものを。予備を含め複数枚持参することをお勧めします。",
        forPurpose: ['travel', 'business', 'study'],
        productId: 'face_mask'
      },
      {
        name: "筆記用具",
        description: "入国カード記入用。ボールペンと鉛筆の両方があると安心。消しゴムもあると便利です。",
        forPurpose: ['travel', 'business', 'study'],
        productId: 'pen_pencil'
      }
    ]
  },
  {
    name: "生活用品",
    icon: <Bed className="w-5 h-5" />,
    color: "green",
    forPurpose: ['travel', 'business', 'study'],
    items: [
      {
        name: "歯ブラシ・歯磨き粉",
        description: "機内持ち込み制限に注意。歯磨き粉は100ml以下のものを選択。予備の歯ブラシがあると安心です。",
        forPurpose: ['travel', 'business', 'study'],
        productId: 'toothbrush_toothpaste'
      },
      {
        name: "シャンプー・リンス",
        description: "ホテルのアメニティで代用可。持参する場合は詰め替え容器を使用し、機内持ち込み制限に注意。",
        forPurpose: ['travel', 'business', 'study'],
        productId: 'shampoo_conditioner'
      },
      {
        name: "メイク落とし",
        description: "シートタイプが便利。液体タイプの場合は機内持ち込み制限に注意が必要です。",
        productId: 'makeup_remover',
        forPurpose: ['travel', 'business', 'study']
      },
      {
        name: "化粧水・乳液",
        description: "気圧の変化で漏れる可能性があるため、小分け容器の活用を。機内持ち込み制限にも注意。",
        forPurpose: ['travel', 'business', 'study'],
        productId: 'skincare_set'
      },
      {
        name: "日焼け止め",
        description: "現地の紫外線強度に応じたSPF値のものを。小分け容器活用で機内持ち込みも可能です。",
        productId: 'sunscreen',
        forPurpose: ['travel', 'study']
      },
      {
        name: "虫除けスプレー",
        description: "熱帯地域では必須。現地での蚊対策に効果的。シートタイプもあると便利です。",
        productId: 'insect_repellent',
        forPurpose: ['travel', 'study']
      }
    ]
  },
  {
    name: "電子機器",
    icon: <Laptop className="w-5 h-5" />,
    color: "yellow",
    forPurpose: ['travel', 'business', 'study'],
    items: [
      {
        name: "カメラ",
        description: "バッテリーの予備は必須。SD カードの容量も余裕を持って。機内持ち込みがおすすめです。",
        productId: 'camera',
        forPurpose: ['travel', 'study']
      },
      {
        name: "モバイルバッテリー",
        description: "容量は20,000mAh以下を選択（航空会社の制限）。複数ポート付きだと便利です。",
        productId: 'power_bank',
        forPurpose: ['travel', 'business', 'study']
      },
      {
        name: "充電ケーブル",
        description: "各デバイスに対応したものを。断線防止のため予備があると安心です。",
        productId: 'charging_cable',
        forPurpose: ['travel', 'business', 'study']
      },
      {
        name: "変圧器",
        description: "使用する電化製品の電圧を確認。変換プラグと一体型のものもあり便利です。",
        productId: 'voltage_converter',
        forPurpose: ['travel', 'business', 'study']
      }
    ]
  }
];
