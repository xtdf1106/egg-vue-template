(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71c7affc"],{3:function(n,c){},4:function(n,c){},faac:function(n,c,t){"use strict";t.r(c),t.d(c,"export_txt_to_zip",function(){return e});t("6b54"),t("87b3"),t("ac6a"),t("f3e2");var o=t("7c39"),a=t.n(o);function e(n,c,t,o){var e=new a.a,f=t||"file",i=o||"file",r=c,u="".concat(n,"\r\n");r.forEach(function(n){var c="";c=n.toString(),u+="".concat(c,"\r\n")}),e.file("".concat(f,".txt"),u),e.generateAsync({type:"blob"}).then(function(n){saveAs(n,"".concat(i,".zip"))},function(n){alert("导出失败")})}t("0fd4")}}]);