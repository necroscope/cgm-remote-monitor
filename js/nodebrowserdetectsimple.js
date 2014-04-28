var useragent = 0;

function initBrowserDetection()
{
	useragent = navigator.userAgent.toLowerCase();
}

function isDesktopOs()
{
	return (!isAndroid() && !isIOS());
}

function isAndroid()
{
    if(useragent.search("android") > -1)
        return true;
    return false;
}

function isIOS()
{
    if(useragent.search("ipad") > -1)
        return true;
    if(useragent.search("iphone") > -1)
        return true;
    if(useragent.search("ipod") > -1)
        return true;
        
    return false;
}

function isFirefox()
{
	if(useragent.search("firefox") > -1)
		return true;
	return false;
}

function isOpera()
{
	if(useragent.search("opera") > -1)
		return true;
	return false;
}

function isMac()
{
	if(useragent.search("macintosh") > -1)
		return true;
	return false;
}

function isIE()
{
	if(useragent.search("msie") > -1)
		return true;
	return false;
}

function isChrome()
{
	if(useragent.search("chrome") > -1)
		return true;
	return false;
}

function isSafari()
{
	if(useragent.search("safari") > -1 && useragent.search("chrome") < 0)
		return true;
	return false;
}
