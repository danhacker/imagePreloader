		(function(){
		
			function preloader(){
				
				var dfdInitialPreload = $.Deferred();
				
				function _init(){console.log('preloader.init');}
				
				function _preloadImages(imgArr){
					imgArr == typeof(imgArr) == "undefined" ? [] : imgArr;
					var dfd = $.Deferred(),
						count  = 0,
						imagesToLoad = imgArr.length,
						images = [];
					
					$.each(imgArr, function(i, o){
						images[i] = new Image();
						$(images[i]).load(function(){
							if (--imagesToLoad < 0){
								dfdInitialPreload.resolve();
								dfd.resolve();
							} else {
								var newImg = $('<img/>').attr('src', $(this).attr('src'));
								
								count++;
								dfd.notify(count, o);
								
							}
						}).attr('src', imgArr[i]);
					
					});
					return dfd.promise();
				}
					
				_init();
				
				return {
					preloadImages : _preloadImages
				}
			
			
		}
		
		window.preloader = preloader();
			
	})();
	
//});
