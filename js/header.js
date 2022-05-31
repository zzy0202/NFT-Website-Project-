(function (){
	let searchButton = document.querySelector('.searchList');//获取搜索按钮
	let searchButtonContent = ['藏品','专辑','艺术家'];		//搜索按钮里面的内容

	let shopButtonContent = ['游戏','小说','域名','收藏品','音乐','艺术品'];		//搜索按钮里面的内容
	let shopList = document.querySelector('.navItemList');
	let shop = document.querySelector('.shop');
	let searchContentDivList = document.createElement('div');
	let shopContentDivList = document.createElement('div');
	let searchListContent = document.querySelector('.searchListContent');
	let contentDivListIsShow = false;
	function initSearchButtonContentDiv() {
		searchContentDivList.className = 'searchButtonContentList';
		shopContentDivList.className = 'shopButtonContentList';
		searchButtonContent.forEach(function (item,i) {
			let contentDiv = document.createElement('div');
			contentDiv.className = 'searchButtonContentItem'
			contentDiv.innerHTML = item;
			searchContentDivList.appendChild(contentDiv);
		})
		searchButton.appendChild(searchContentDivList);

		shopButtonContent.forEach(function (item,i) {
			let contentDiv = document.createElement('div');
			contentDiv.className = 'shopButtonContentItem'
			contentDiv.innerHTML = item;
			shopContentDivList.appendChild(contentDiv);
		})
		shopList.appendChild(shopContentDivList);
	}
	initSearchButtonContentDiv();
	
	let noEnd = false;
	shop.addEventListener('mouseenter',function () {
		noEnd = false;
		shopContentDivList.style.display = 'flex';
		shopContentDivList.style.zIndex = '90';
		setTimeout(function () {
			shopContentDivList.style.opacity = '1';
		},1)
		shopContentDivList.addEventListener('mouseenter',function (e) {
			e.stopPropagation();
			shopContentDivList.style.display = 'flex';
			noEnd = true;
			console.log('here!',noEnd);
		})
		shopContentDivList.addEventListener('mouseleave',function (e) {
			e.stopPropagation();
			shopContentDivList.style.opacity = '0';
			setTimeout(function () {
				shopContentDivList.style.display = 'none';
			},200)
		})
	})
	shop.addEventListener('mouseleave',function () {
		setTimeout(function () {
			if(!noEnd) {
				shopContentDivList.style.opacity = '0';
				setTimeout(function () {
					shopContentDivList.style.display = 'none';
				},200)
			}
			else if(noEnd) {
				shopContentDivList.style.display = 'flex';
			}
		},1)
	})
	let loginIcon = document.querySelector('.icon-renzheng');
	let login = document.querySelector('.login');
	let block = document.querySelector('.block');
	let quitLogin = document.querySelector('.loginHeaderRight');
	loginIcon.addEventListener('click',function (e) {
		e.stopPropagation();
		block.style.display = 'flex';
		login.classList.add('loginActive');
		login.classList.remove('loginInactive');
		document.addEventListener('click',function (e) {
			if(e.pageX<1520) {
				login.classList.remove('loginActive');
				login.classList.add('loginInactive');
				console.log(e.pageX)
				login.addEventListener('animationend',function () {
					if(login.className.includes('loginInactive')) {
						block.style.display = 'none';
					}
				})
			}
		})
	})
	quitLogin.addEventListener('click',function () {
		login.classList.remove('loginActive');
		login.classList.add('loginInactive');
		login.addEventListener('animationend',function () {
			if(login.className.includes('loginInactive')>0) {
				block.style.display = 'none';
			}
		})
	})
})();
