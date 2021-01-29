### 1.URL

**protocol://hostname[:port]/path[?query][#fragment]**  
**协议://主机[:端口]/路径[?参数][#片段]**

### 2.DNS

#### 2.1 DNS解析

解析域名taobao.com  
`ubuntu@DESKTOP-O3U7NVH:~$ dig +trace taobao.com`  
获取13个根 **.** 域名服务器

```
; <<>> DiG 9.16.1-Ubuntu <<>> +trace www.taobao.com
;; global options: +cmd
.                       2048    IN      NS      f.root-servers.net.
.                       2048    IN      NS      h.root-servers.net.
.                       2048    IN      NS      j.root-servers.net.
.                       2048    IN      NS      k.root-servers.net.
.                       2048    IN      NS      i.root-servers.net.
.                       2048    IN      NS      l.root-servers.net.
.                       2048    IN      NS      g.root-servers.net.
.                       2048    IN      NS      c.root-servers.net.
.                       2048    IN      NS      m.root-servers.net.
.                       2048    IN      NS      e.root-servers.net.
.                       2048    IN      NS      d.root-servers.net.
.                       2048    IN      NS      a.root-servers.net.
.                       2048    IN      NS      b.root-servers.net.
;; Received 239 bytes from 172.19.176.1#53(172.19.176.1) in 880 ms
```

获取13个 **.com** 域名服务器

```
com.                    172800  IN      NS      m.gtld-servers.net.
com.                    172800  IN      NS      f.gtld-servers.net.
com.                    172800  IN      NS      b.gtld-servers.net.
com.                    172800  IN      NS      l.gtld-servers.net.
com.                    172800  IN      NS      d.gtld-servers.net.
com.                    172800  IN      NS      c.gtld-servers.net.
com.                    172800  IN      NS      k.gtld-servers.net.
com.                    172800  IN      NS      e.gtld-servers.net.
com.                    172800  IN      NS      h.gtld-servers.net.
com.                    172800  IN      NS      j.gtld-servers.net.
com.                    172800  IN      NS      i.gtld-servers.net.
com.                    172800  IN      NS      g.gtld-servers.net.
com.                    172800  IN      NS      a.gtld-servers.net.
com.                    86400   IN      DS      30909 8 2 E2D3C916F6DEEAC73294E8268FB5885044A833FC5459588F4A9184CF C41A5766
com.                    86400   IN      RRSIG   DS 8 1 86400 20210210050000 20210128040000 42351 . dR7s0CXFL00E9iHtjoo//InEeL3gGhK1mwoNQIG+kEwG5gQfgeFC/BSw Yy1ZVKVdZYh9YD5Fj3YQyOxentEVfzGzx/esFf6C54lFASLpU1an+6aq d+UeaZnQyOUbMtF3jYLcNn2Za7Sj+mpAiBvgX8TuBSrEglR7z89HHNp2 As5cAPtAdRqTrb+XM++4vE571LXyHRlnPucPokFynBIAPIafKX+QBi3W wQGRA2cL7MAn4N9pjXtq1LTPK2xFLql6Uy0VS9e6d4Dh5DfrpywIZWLw w5YCTdCe0yrJq1H4bKNzuRfTz/8GOTSyMryfPcZQJqO4FEnuhLUAZkNv opaB7g==
;; Received 1205 bytes from 192.36.148.17#53(i.root-servers.net) in 270 ms
```

获取**ns4-7.taobao.com**解析

```
taobao.com.             172800  IN      NS      ns4.taobao.com.
taobao.com.             172800  IN      NS      ns5.taobao.com.
taobao.com.             172800  IN      NS      ns6.taobao.com.
taobao.com.             172800  IN      NS      ns7.taobao.com.
CK0POJMG874LJREF7EFN8430QVIT8BSM.com. 86400 IN NSEC3 1 1 0 - CK0Q1GIN43N1ARRC9OSM6QPQR81H5M9A NS SOA RRSIG DNSKEY NSEC3PARAM
CK0POJMG874LJREF7EFN8430QVIT8BSM.com. 86400 IN RRSIG NSEC3 8 2 86400 20210201054053 20210125043053 58540 com. B4DPe7hPnC5OwZS8reMWYIzNWoZogPtLQwcQ+dkELoQmH+PMl8JHC84L oy7Ytn+yTm4IEcabXFNtaTtW+qGKsNXj5BZmDzddM6vFaj22nTTkr4PD tcMYaKqOR/q6NSsS0Nm+0zRR7MtKqSeSymzsyP1Yeu5jn7mEhXjUt3xV gREsgFR+UGdfT8cHG1ZShhQE7IRwIdP2aPpj2gQLrY5p2A==
D9N30BBNCPT73TTDJAILJ4QHJUPRID7I.com. 86400 IN NSEC3 1 1 0 - D9N3IUDKF9F1P5BL0IVCDUBBLQ83GQ1O NS DS RRSIG
D9N30BBNCPT73TTDJAILJ4QHJUPRID7I.com. 86400 IN RRSIG NSEC3 8 2 86400 20210202072625 20210126061625 58540 com. LYrCBkPAi6rNePGZBI9pftNxgR77yRieKAVwlcRS4005zBeenQOsTsl8 eaByIJECGO4mHp0AGmvmfjxFa/0FHDGrGoA9zZKt0RVfBGoUnMH1KMOf 2IDAYKmC1WrG/SyjSUSWZXU3jP4Ma2APL/iMHvErSWoI2uq+GnNfha+3 rad+6IakmiLOp4bnaPmlLXiF6/b9bQcCHwIkALFhOnq+gw==
;; Received 792 bytes from 192.48.79.30#53(j.gtld-servers.net) in 280 ms
```

ns5返回**www.taobao.com**CNAME记录**www.taobao.com.danuoyi.tbcache.com**.

```
www.taobao.com.         600     IN      CNAME   www.taobao.com.danuoyi.tbcache.com.
;; Received 91 bytes from 140.205.122.33#53(ns5.taobao.com) in 40 ms
```

该域名是cdn域名，最后会解析到A记录 ip

```
www.taobao.com.danuoyi.tbcache.com. 0 IN A      111.3.78.219
www.taobao.com.danuoyi.tbcache.com. 0 IN A      120.199.95.227
www.taobao.com.danuoyi.tbcache.com. 0 IN A      111.3.78.220
www.taobao.com.danuoyi.tbcache.com. 0 IN A      120.199.95.187

```

如果是解析**taobao.com**最后返回的是A记录 ip

```
taobao.com.             300     IN      A       140.205.220.96
taobao.com.             300     IN      A       140.205.94.189
;; Received 71 bytes from 106.11.35.25#53(ns7.taobao.com) in 100 ms
```

#### 2.2 DNS缓存

浏览器缓存，系统缓存，路由器缓存

### 3.ip路由

```
1	192.168.43.191 	   2 ms	   4 ms	   6 ms	局域网	*
2	*              	   *   	   *   	   *   				
3	172.20.17.1    	  35 ms	  40 ms	  51 ms	局域网	*	localhost
4	*              	   *   	   *   	   *   				
5	120.204.54.165 	  34 ms	  43 ms	  45 ms	中国 上海 chinamobile.com 移动	AS24400	.
6	117.135.41.29  	  51 ms	   *   	   *   	中国 上海 chinamobile.com 移动	AS24400	.
7	117.135.48.78  	  44 ms	  50 ms	  63 ms	中国 上海 chinamobile.com 移动	AS24400	.
8	117.185.3.206  	  36 ms	  45 ms	  49 ms	中国 上海 chinamobile.com 移动	AS24400	.
9	116.251.88.142 	  30 ms	  38 ms	   *   	中国 上海 aliyun.com 阿里云	AS45102		
10	*              	   *   	   *   	   *   				
11	42.120.247.193 	  46 ms	  52 ms	  61 ms	中国 浙江 杭州 aliyun.com 阿里云/电信/联通/移动/铁通/教育网	AS37963		
12	*              	   *   	   *   	   *   				
13	*              	   *   	   *   	   *   				
14	*              	   *   	   *   	   *   				
15	*              	   *   	   *   	   *   				
16	*              	   *   	   *   	   *   				
17	*              	   *   	   *   	   *   				
18	*              	   *   	   *   	   *   				
19	*              	   *   	   *   	   *   				
20	*              	   *   	   *   	   *   				
21	*              	   *   	   *   	   *   				
22	*              	   *   	   *   	   *   				
23	*              	   *   	   *   	   *   				
24	*              	   *   	   *   	   *   				
25	*              	   *   	   *   	   *   				
26	*              	   *   	   *   	   *   				
27	140.205.94.189 	  43 ms	  50 ms	  52 ms	中国 浙江 杭州 aliyun.com 阿里云/电信/联通/移动/铁通/教育网	AS37963		
```

### 4.数据包

|ethernet头|IP头|TCP头|HTTP数据|帧尾|
|---|---|---|---|---|

#### 4.1 HTTP报文
默认80端口  
Request

```
GET http://baidu.com/ HTTP/1.1
Host: baidu.com
User-Agent: curl/7.68.0
Accept: */*
Proxy-Connection: Keep-Alive
```

Response

```
HTTP/1.1 200 OK
Content-Length: 81
Accept-Ranges: bytes
Cache-Control: max-age=86400
Connection: keep-alive
Content-Type: text/html
Date: Thu, 28 Jan 2021 13:15:45 GMT
Etag: "51-47cf7e6ee8400"
Expires: Fri, 29 Jan 2021 13:15:45 GMT
Keep-Alive: timeout=4
Last-Modified: Tue, 12 Jan 2010 13:48:00 GMT
Proxy-Connection: keep-alive
Server: Apache

<html>
<meta http-equiv="refresh" content="0;url=http://www.baidu.com/">
</html>
```
### 5.渲染

#### 5.1 浏览器

|浏览器 |内核|
|---|---|
|Chrome |Chromium|
|firefox|Gecko|
|IE|Trident|
|safari|webkit|

解析dom树

解析css

计算并绘制

布局变化 reflow(回流)

颜色变化 repaint(重绘)

