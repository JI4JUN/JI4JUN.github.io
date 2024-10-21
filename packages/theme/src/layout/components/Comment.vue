<script lang="ts" setup>
import { reactive, toRefs, onMounted } from "vue";
import { useData } from "vitepress";
import md5 from "blueimp-md5";
import $ from "jquery";
import { message } from "ant-design-vue";
import "ant-design-vue/es/message/style/index.js";
import Gitalk from "gitalk";
import "../styles/gitalk.css";

// 定义属性
const props = defineProps({
  commentConfig: Object,
});

const data = reactive({
  type: props.commentConfig?.type ?? "gitalk",
});
const { type } = toRefs(data);

// 初始化评论组件配置
const { page } = useData();
let gitalk: Gitalk;
if (type.value && type.value == "gitalk") {
  gitalk = new Gitalk({
    clientID: "Ov23ctNqkutw4PpaBPRA",
    clientSecret: "ad3ee60be331e7aef649191ee9ba212f0d9eda2c",
    repo: "ji4jun.github.io",
    owner: "ji4jun",
    admin: ["ji4jun"],
    id: md5(page.value.relativePath),
    language: "zh-CN",
    distractionFreeMode: false,
  });
}

// 渲染评论组件
onMounted(() => {
  if (type.value && type.value == "gitalk") {
    gitalk.render("comment-container");

    // 如果点赞，先判断有没有登录
    let $gc = $("#comment-container");
    $gc.on("click", ".gt-comment-like", function () {
      if (!window.localStorage.getItem("GT_ACCESS_TOKEN")) {
        message.warning({
          content: "点赞前，请您先进行登录",
        });

        return false;
      }
      return true;
    });
    // 提交评论后输入框高度没有重置bug
    $gc.on("click", ".gt-header-controls .gt-btn-public", function () {
      let $gt = $(".gt-header-textarea");
      $gt.css("height", "72px");
    });
    // 点击预览时，隐藏评论按钮
    $gc.on("click", ".gt-header-controls .gt-btn-preview", function () {
      let pl = $(".gt-header-controls .gt-btn-public");
      if (pl.hasClass("hide")) {
        pl.removeClass("hide");
      } else {
        // 隐藏
        pl.addClass("hide");
      }
    });
  }
});
</script>

<template>
  <div id="comment-container"></div>
</template>
