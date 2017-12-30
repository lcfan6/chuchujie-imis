var qs = qsParser(location.href);
var name = qs.name || '默认';
document.querySelector('#name').innerHTML = name;
