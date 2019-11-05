<template>
      <div>
            

                  <!-- SIDEBAR -->
				<div id="sidebar" class="sidebar">
					<div class="sidebar-menu nav-collapse">
						<div class="divide-20"></div>
						<!-- SEARCH BAR -->
						<div id="search-bar">
							<input class="search" type="text" placeholder="Search"><i class="fa fa-search search-icon"></i>
						</div>
		
						<ul>
							<li class="active">
								<router-link to="/index/allfile">
								<i class="fa fa-folder fa-fw"></i> <span class="menu-text">全部文件</span>
								<span class="selected"></span>
								</router-link>				
							</li>
							<li class="has-sub">
								<router-link to="/index/filestable">
	
								<i class="fa fa-clock-o fa-fw"></i> <span class="menu-text">最近</span>
								<span class="selected"></span>
								</router-link>				
							</li>
							<li class="has-sub">
								<router-link to="/index/collect">
								<i class="fa fa-star fa-fw"></i> <span class="menu-text">收藏</span>
								<span class="selected"></span>
								</router-link>					
							</li>
							<li class="has-sub">
								<a href="index.html">
								<i class="fa fa-share-square fa-fw"></i> <span class="menu-text">共享</span>
								<span class="selected"></span>
								</a>					
							</li>
							<li class="has-sub">
								<a href="index.html">
								<i class="fa fa-tags fa-fw"></i> <span class="menu-text">标签</span>
								<span class="selected"></span>
								</a>					
							</li>
							
						</ul>
						<!-- /SIDEBAR MENU -->
					</div>
				</div>
				<!-- /SIDEBAR -->


      </div>
</template>

<script>
export default {
      
}
</script>