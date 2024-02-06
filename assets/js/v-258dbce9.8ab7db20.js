"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81188],{655042:(e,t,a)=>{a.r(t),a.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-258dbce9","path":"/devices/MCCGQ14LM.html","title":"Aqara MCCGQ14LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara MCCGQ14LM control via MQTT","description":"Integrate your Aqara MCCGQ14LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-11-30T20:10:17.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Adapter firmware","slug":"adapter-firmware","link":"#adapter-firmware","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Contact (binary)","slug":"contact-binary","link":"#contact-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1707249617000},"filePathRelative":"devices/MCCGQ14LM.md"}')},39738:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var r=a(166252);const i=(0,r._)("h1",{id:"aqara-mccgq14lm",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#aqara-mccgq14lm","aria-hidden":"true"},"#"),(0,r.Uk)(" Aqara MCCGQ14LM")],-1),o=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th"),(0,r._)("th")])],-1),n=(0,r._)("tr",null,[(0,r._)("td",null,"Model"),(0,r._)("td",null,"MCCGQ14LM")],-1),l=(0,r._)("td",null,"Vendor",-1),d=(0,r._)("tr",null,[(0,r._)("td",null,"Description"),(0,r._)("td",null,"Door and window sensor E1")],-1),c=(0,r._)("tr",null,[(0,r._)("td",null,"Exposes"),(0,r._)("td",null,"contact, battery, battery_low, voltage, linkquality")],-1),s=(0,r._)("tr",null,[(0,r._)("td",null,"Picture"),(0,r._)("td",null,[(0,r._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MCCGQ14LM.png",alt:"Aqara MCCGQ14LM"})])],-1),u=(0,r._)("h2",{id:"notes",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,r.Uk)(" Notes")],-1),h=(0,r._)("h3",{id:"adapter-firmware",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#adapter-firmware","aria-hidden":"true"},"#"),(0,r.Uk)(" Adapter firmware")],-1),p=(0,r._)("p",null,"In order for this device to work (fully), at least the following firmware is required on your adapter:",-1),b={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},m=(0,r._)("code",null,"20211115",-1),f={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},y=(0,r._)("code",null,"20211114",-1),_={href:"https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592",target:"_blank",rel:"noopener noreferrer"},g=(0,r._)("code",null,"20211222",-1),k={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},v=(0,r._)("code",null,"0x26720700",-1),w=(0,r._)("p",null,[(0,r._)("em",null,"Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.")],-1),C=(0,r.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary" aria-hidden="true">#</a> Contact (binary)</h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),q={},x=(0,a(983744).Z)(q,[["render",function(e,t){const a=(0,r.up)("RouterLink"),q=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.kq)(" !!!! "),(0,r.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,r.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,r.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,r.kq)(" !!!! "),i,(0,r._)("table",null,[o,(0,r._)("tbody",null,[n,(0,r._)("tr",null,[l,(0,r._)("td",null,[(0,r.Wm)(a,{to:"/supported-devices/#v=Aqara"},{default:(0,r.w5)((()=>[(0,r.Uk)("Aqara")])),_:1})])]),d,c,s])]),(0,r.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,p,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r.Uk)("CC2530/CC2531: "),(0,r._)("a",b,[m,(0,r.Wm)(q)])]),(0,r._)("li",null,[(0,r.Uk)("CC1352/CC2652: "),(0,r._)("a",f,[y,(0,r.Wm)(q)])]),(0,r._)("li",null,[(0,r.Uk)("CC2538: "),(0,r._)("a",_,[g,(0,r.Wm)(q)])]),(0,r._)("li",null,[(0,r.Uk)("Conbee II: "),(0,r._)("a",k,[v,(0,r.Wm)(q)])])]),w,(0,r.kq)(" Notes END: Do not edit below this line "),C])}]])}}]);