<template>
    <div>
        <div id="app-content-systemtagsfilter" class="viewcontainer hide-hidden-files has-comments">
	<div id="controls"><div class="select2-container select2-container-multi" id="s2id_autogen1"><ul class="select2-choices">  <li class="select2-search-field">    <label for="s2id_autogen2" class="select2-offscreen"></label>    <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input select2-default" id="s2id_autogen2" placeholder="" style="width: 229px;">  </li></ul><div class="select2-drop select2-drop-multi select2-display-none">   <ul class="select2-results">   <li class="select2-no-results">标签未找到</li><li class="select2-no-results">标签未找到</li></ul></div></div><input type="hidden" name="tags" tabindex="-1" class="select2-offscreen" value=""></div>

<div id="emptycontent" class=""><div class="icon-systemtags"></div><h2>请选择标签来筛选</h2></div>

<div class="nofilterresults emptycontent hidden">
	<div class="icon-search"></div>
	<h2>此文件夹中无项目</h2>
	<p></p>
</div>

<table id="filestable" data-preview-x="250" data-preview-y="250" class="has-controls">
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
<input type="hidden" name="dir" id="dir" value="/">

	</div>
    </div>
</template>