(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{573:function(r,t,e){"use strict";e.r(t);var a=e(14),s=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"数据监控小白入门-prometheus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据监控小白入门-prometheus"}},[r._v("#")]),r._v(" 数据监控小白入门 （Prometheus）")]),r._v(" "),e("h2",{attrs:{id:"概念介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念介绍"}},[r._v("#")]),r._v(" 概念介绍")]),r._v(" "),e("p",[r._v("初次接触到数据监控，遇到了一些陌生的概念，")]),r._v(" "),e("ul",[e("li",[r._v("什么是Prometheus？")]),r._v(" "),e("li",[r._v("什么是grafana？")]),r._v(" "),e("li",[r._v("如何做数据采集？")]),r._v(" "),e("li",[r._v("如何对数据进行处理？")]),r._v(" "),e("li",[r._v("如何查询数据？")]),r._v(" "),e("li",[r._v("如何展示数据？")]),r._v(" "),e("li",[r._v("如何从数据中发现问题？")])]),r._v(" "),e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[r._v("#")]),r._v(" 安装")]),r._v(" "),e("p",[r._v("使用docker一键安装")]),r._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[r._v("$ docker run -p "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("9090")]),r._v(":9090 -v /Users/lewang/Desktop/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus\n")])])]),e("h3",{attrs:{id:"exporter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exporter"}},[r._v("#")]),r._v(" Exporter")]),r._v(" "),e("p",[r._v("在Prometheus的架构设计中，Prometheus Server并不直接服务监控特定的目标，其主要任务负责数据的收集，存储并且对外提供数据查询支持。因此为了能够能够监控到某些东西，如主机的CPU使用率，我们需要使用到Exporter。Prometheus周期性的从Exporter暴露的HTTP服务地址（通常是/metrics）拉取监控样本数据。")]),r._v(" "),e("p",[r._v("广义上讲所有可以向Prometheus提供监控样本数据的程序都可以被称为一个Exporter。而Exporter的一个实例称为target，Prometheus通过轮询的方式定期从这些target中获取样本数据。")]),r._v(" "),e("p",[r._v("// TODO: exporter 实例")]),r._v(" "),e("h3",{attrs:{id:"promql查询监控数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promql查询监控数据"}},[r._v("#")]),r._v(" PromQL查询监控数据")]),r._v(" "),e("h3",{attrs:{id:"监控数据可视化-grafana"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#监控数据可视化-grafana"}},[r._v("#")]),r._v(" 监控数据可视化（grafana）")]),r._v(" "),e("p",[r._v("一键安装：")]),r._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[r._v("docker run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[r._v("3000")]),r._v(":3000 grafana/grafana\n")])])]),e("h2",{attrs:{id:"promql-详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promql-详解"}},[r._v("#")]),r._v(" PromQL 详解")]),r._v(" "),e("h3",{attrs:{id:"理解时间序列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#理解时间序列"}},[r._v("#")]),r._v(" 理解时间序列")]),r._v(" "),e("h3",{attrs:{id:"metrics类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metrics类型"}},[r._v("#")]),r._v(" Metrics类型")]),r._v(" "),e("h3",{attrs:{id:"初识promql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初识promql"}},[r._v("#")]),r._v(" 初识PromQL")]),r._v(" "),e("h1",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[r._v("#")]),r._v(" 参考资料")]),r._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://www.shangmayuan.com/a/a099fc4421dd407da2a81cea.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("完全理解Prometheus查询语法"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000024467720",target:"_blank",rel:"noopener noreferrer"}},[r._v("Prometheus Metrics 设计的最佳实践和应用实例，看这篇够了！"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://yunlzheng.gitbook.io/prometheus-book/parti-prometheus-ji-chu/promql/what-is-prometheus-metrics-and-labels",target:"_blank",rel:"noopener noreferrer"}},[r._v("Prometheus 教程"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/wtan825/article/details/94616813",target:"_blank",rel:"noopener noreferrer"}},[r._v("prometheus的summary和histogram指标的简单理解"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/ZhanBiaoChina/article/details/109012566",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/ccffd6b9e3d1",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000019987152",target:"_blank",rel:"noopener noreferrer"}},[e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);