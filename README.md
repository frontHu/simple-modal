# simple-modal-react
##### 一个基于react的简单模态框组件，适用于没有什么UI风格，进需要模态框功能的场景。（简单来说这个模态框很粗糙，哈哈）

# 使用
>*npm i simple-modal-react*

>*import ModalBox from 'simple-modal-react'*

>eg:```<ModalBox isOpen={true}></ModalBox>```

# 基本配置说明

 | 属性 | 说明 | 类型 | 默认值 |
 | ------ | ----- | ------ | ------ |
 | title | 设置模态框顶部title | String | Basic Title |
 | titlePosition | 设置顶部title位置：*left*, *center* | String | center |
 | width | 设置模态框宽度, 最大宽度不超过560px | String | 400px |
 | wrapClassName | 模态框外层容器类名 | String | 无 |
 | okText | 设置确定按钮显示文本 | String | 确定 |
 | cancelText | 设置取消按钮文本 | String | 取消 |
 | btnPosition | 设置按钮位置: left, center, right | String | center |
 | onOkClick | 点击确定的回调 | function(e） | 无 |
 | onCancelClick | 点击取消的回调 | function(e) | 无 |
 
 # 说明
 > 学习造轮子
