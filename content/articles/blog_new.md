---
title: くりすたのブログをリニューアルしました
image: /ogimage.png
tags:
  - お知らせ
date: 2024-03-03
---

# はじめに
この度、くりすたのブログをリニューアルしました。リニューアルした経緯と使用している技術等に軽く触れられればと思います。

## リニューアルしたきっかけ
今までは、Go言語で作られた静的サイトジェネレータのHugoとStackというテーマを使用していました。
::BlogCard{url="https://themes.gohugo.io/themes/hugo-theme-stack/"}
::
デザインもよく使いやすかったのですが、最近フロントエンドを学び始めた私にとってとある考えが生まれます。  
「あれ、ブログもいっそ自作しちゃえばよくね? Hugoのテンプレート作るのめんどいしNuxtあたりでやっちゃえ」
ということで急遽Nuxt3を用いてブログをリニューアルすることになるのでした。

### Test

## Nuxt3での構築
Nuxt3は、Vue.jsの機能に加えて`.vue`の自動インポート、自動ルーティングができることやSEO関連をプラグインで一括管理できるなどの利点が多いです。Vue.js自体もHTMLにCSSとJavaScriptを合わせたようなもの(実際にはvueファイルにHTML、CSS、JavaScriptをまとめてかける)なので学習コストはReactよりも低いと思っています。  
このNuxt3でブログを作る方法は次の方法があげられると思います。
- 外部CMSで記事を管理、API経由でブログを構築
- `nuxt/content`プラグインでオフラインで管理・構築

前者は、[Contentful](https://www.contentful.com)や、[MicroCMS](https://microcms.io)などがあげられます。記事をオンライン上で管理できるほかmarkdownを書かなくても良いという利点がありますが、記事の取得はAPI経由で行うため意外とコストがかかってしまいます。  
後者の場合は、Gitで記事を管理できるほかCloudflareでデプロイすればコストがかからないという利点があります。  
ということでNuxt3での構築を始めます。`create-nuxt-app`はv2にしか対応していないため`nuxi`でテンプレートを作成します。
```sh [shell]
npx nuxi@latest init
```

## スタイル
Hugoのブログでもそうですがモダンで見やすいブログはとても重要です。とはいえいちいちCSSを書く暇などありません。そこでTailwind CSSを用います。
::BlogCard{url="https://tailwindcss.com"}
::
Tailwind CSSはリセットCSSとも呼ばれ、デフォルトのUIをリセットします。代わりに簡略化されたクラスを書くことで見やすいUIを作ることができます。このリセットの影響でブログで表示するほぼすべてのUIを再構築する必要があります。ですが、TailwindCSSにコンポーネントのコード例があるほか、preline UIというTailwindベースのUIライブラリがあり、そのコードを用いています。それでもブログには欠かせないコードブロックや引用、テーブル、リンクカードを自作するのはかなりの労力がかかりました。Nuxt/contentでは、これらのスタイルを定義する仕組み(Prose Components)というものがあります。これを用いるとこのブログのようにスタイルを変更することができます。

## リンクカード
このブログを作るうえで苦労した点はリンクカードです。このページにもたくさんありますが、例えば私のホームページを表示させると次のようになります。
::BlogCard{url="https://crystaworld1221.com"}
::
このリンクカードでは、OpenGraphのデータを読み込み、カードとして見やすくするという効果があります。Nuxt3ではServerという仕組みがあり、ローカルでAPIサーバーを作成し、そのAPIを叩いて結果をvueコンポーネントとして利用することができます。カレントディレクトリに`/server/api`というフォルダを作り、`<任意の名前>.<タイプ>.ts`というファイルを作ります。
| タイプ | 説明                       | 
| :----: | :------------------------ | 
| `get`    | データを取得します         | 
| `post`   | データを送信(POST)します   | 
| `delete` | データを削除(DELETE)します | 

このタイプは、APIを作成する際と同じ命名規則なので調べれば出てくると思います。APIを叩いてデータを取得する方法は公式ドキュメントをご覧ください。OGPの取得には、[unfurl.js](https://www.npmjs.com/package/unfurl.js)というライブラリを用いました。
::BlogCard{url="https://nuxt.com/docs/guide/directory-structure/server"}
::

## SEO・OGPの設定
ウェブサイトを作るうえで欠かせないのがSEOの設定です。この設定をすることでGoogleにクロール(検索エンジンに登録)され検索した際に上位に表示されやすくなります。Nuxt3には、Nuxt SEOというプラグインがあります。`npm i @nuxtjs/seo`{lang="sh"}でインストールし、`nuxt.config.ts`に、次のように設定します。
```vue [lang.vue]{2,4-6,10-13}
<template>  // [!code ++]
  <div class="mt-2 mb-2">
    <div
      class="p-4 rounded-lg bg-[#323631] dark:bg-neutral-900 border-gray-700">
    </div>
  </div>
</template>
```

これにより、HTMLでいうところの`<meta>`タグの設定が完了したことになります。また、このように`nuxt.config.ts`に書いてある場合はルーティングされている全ページにこの設定が適用されます。  
次に、OGPの設定です。ブログである以上ページごとにどういうページであるかを伝えるOGPを設定する必要があります。これに関しては、Nuxt SEO内にある OG Imageという機能を用います。次のドキュメント通りに作成しました。このプラグインはSSGにも対応しており、SSGでも正しく表示されます。(すごい)
::BlogCard{url="https://nuxtseo.com/og-image/getting-started/getting-familar-with-nuxt-og-image"}
::
  
<br/>
以上が今回のブログの大まかな構成です。とても長くなってしまいましたが、どんな技術を用いたのか参考になれば幸いです。作り方については続編として書いていく予定ですので今しばらくお待ちください!