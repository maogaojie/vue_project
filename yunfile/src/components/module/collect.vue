<template>
    <div>
        <div id="app-content-favorites" class="viewcontainer hide-hidden-files has-comments" style="">
	<div id="notification"></div>

<div id="emptycontent" class="">
	<div class="icon-starred"></div>
	<h2>还没有“我喜欢的”</h2>
	<p>收藏的文件和文件夹会在这里显示</p>
</div>

<input type="hidden" name="dir" value="/" id="dir">

<div class="nofilterresults hidden">
	<div class="icon-search"></div>
	<h2>文件夹中无项目</h2>
	<p></p>
</div>
<table id="filestable" class="list-container">
	<thead style="width: 761px;">
		<tr>
			<th id="headerName" class="hidden column-name">
				<div id="headerName-container">
					<a class="name sort columntitle" data-sort="name"><span>名称</span><span class="sort-indicator icon-triangle-n"></span></a>
				</div>
			</th>
			<th id="headerSize" class="hidden column-size">
				<a class="size sort columntitle" data-sort="size"><span>大小</span><span class="sort-indicator hidden icon-triangle-s"></span></a>
			</th>
			<th id="headerDate" class="hidden column-mtime">
				<a id="modified" class="columntitle" data-sort="mtime"><span>修改日期</span><span class="sort-indicator hidden icon-triangle-s"></span></a>
				<span class="selectedActions hidden">
				    <a href="" class="delete-selected">
					<img class="svg" alt="" src="/core/img/actions/delete.svg">
					删除				    </a>
				</span>
			</th>
		</tr>
	</thead>
	<tbody id="fileList"></tbody>
	<tfoot>
	<tr class="summary hidden"><td><span class="info">
	<span class="dirinfo"></span>
	<span class="connector"> 和 </span>
	<span class="fileinfo"></span>
	<span class="hiddeninfo"></span>
	<span class="filter"></span>
</span>
</td><td class="filesize">0 B</td><td class="date"></td></tr></tfoot>
</table>
	</div>
    </div>
</template>