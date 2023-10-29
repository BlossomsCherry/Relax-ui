<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
     import demo3 from './demo3.vue'
    import componentBox from '@/components/componentBox.vue'
</script>

# Message 消息提示

#### 常用于交互反馈提示场景

<br/>

## 基础用法

#### message 消息提示基本使用示例

<br/>
<component-box>
    <demo1/>
</component-box>
<br/>

## 不同状态

#### 可根据 _Message_ 参数的 _type_ 来定义显示不同的状态。

<br/>
<component-box>
    <demo2/>
</component-box>
<br/>

## 自定义配置

#### 可根据不同场景自定义 _icon_ 图标及 _timeout_ 消失时间

<br/>
<component-box>
    <demo3/>
</component-box>
<br/>
