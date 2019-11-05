<template>
    <div>
        <div id="app-content-shareoverview" class="viewcontainer hide-hidden-files has-comments">
	<div id="notification"></div>

<div id="emptycontent" class=""><div class="icon-share"></div><h2>没有共享</h2><p>共享将在这里显示</p></div>

<input type="hidden" name="dir" value="/" id="dir">

<div class="nofilterresults hidden">
	<div class="icon-search"></div>
	<h2>此文件夹中无项目</h2>
</div>

<table id="filestable" class="list-container">
	<thead style="width: 761px;">
		<tr>
			<th id="headerName" class="hidden column-name">
				<div id="headerName-container">
					<a class="name sort columntitle" data-sort="name"><span>名称</span><span class="sort-indicator icon-triangle-n"></span></a>
				</div>
			</th>
			<th id="headerDate" class="hidden column-mtime">
				<a id="modified" class="columntitle" data-sort="mtime"><span>共享时间</span><span class="sort-indicator hidden icon-triangle-s"></span></a>
			</th>
			<th class="hidden column-expiration">
				<a class="columntitle"><span>过期日期 </span></a>
			</th>
		</tr>
	</thead>
	<tbody id="fileList"></tbody>
	<tfoot>
	<tr class="summary hidden"><td>
    <span class="info">
	<span class="dirinfo"></span>
	<span class="connector"> 和 </span>
	<span class="fileinfo"></span>
	<span class="hiddeninfo"></span>
	<span class="filter"></span>
    </span>
</td><td class="date"></td></tr></tfoot>
</table>
	</div>
    </div>
</template>