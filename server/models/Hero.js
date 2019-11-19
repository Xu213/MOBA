const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  // 英雄名称
  name: { type: String },
  // 英雄头像
  avatar: { type: String },
  // 称号
  title: { type: String },
  // 类型
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Category" }],
  // 英雄打分
  scores: {
    // 难度
    difficult: { type: Number },
    // 技能
    skills: { type: Number },
    // 攻击
    attack: { type: Number },
    // 生存
    survive: { type: Number }
  },
  // 技能
  skills: [
    {
      // 技能图标
      icon: { type: String },
      // 技能名称
      name: { type: String },
      // 技能说明
      description: { type: String },
      // 技能小提示
      tips: { type: String }
    }
  ],
  // 顺风出装
  windItems: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Item" }],
  // 逆风出装
  headWindsItems: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Item" }],
  // 使用技巧
  usageTips: { type: String },
  // 对抗技巧
  battleTips: { type: String },
  // 团战思路
  teamTips: { type: String },
  // 英雄关系 最佳搭档
  bestPartners: [
    {
      hero: { type: mongoose.SchemaTypes.ObjectId, ref: "Hero" },
      description: { type: String }
    }
  ],
  // 英雄关系 被谁克制
  restrainedPartners: [
    {
      hero: { type: mongoose.SchemaTypes.ObjectId, ref: "Hero" },
      description: { type: String }
    }
  ],
  // 英雄关系 克制谁
  restraintPartners: [
    {
      hero: { type: mongoose.SchemaTypes.ObjectId, ref: "Hero" },
      description: { type: String }
    }
  ]
});

module.exports = mongoose.model("Hero", schema);
