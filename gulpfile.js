const {src,dest,watch} = require('gulp');

function StreamHtml(){
	return src('src/*.html')
		.pipe(dest('public'));
}
function StreamJS(){
	return src('src/js/*.js')
		.pipe(dest('public'));
}
function StreamJquery(){
    return src('node_modules/jquery/dist/jquery.min.js')
        .pipe(dest('public/lib'))
}
exports.jquery = StreamJquery;
exports.html = StreamHtml;
exports.default = function(){
    watch('src/*.html' ,StreamHtml)
    watch('src/js/*.js' ,StreamJS)
}