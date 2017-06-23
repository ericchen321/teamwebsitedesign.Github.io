// ignore this for now
function text_outline(context, text, x, y, fill_col, outline_col, font){
  context.font = font;
  context.strokeStyle = outline_col;
  context.lineWidth = 5;
  context.strokeText(text, x, y);
  context.fillStyle=fill_col;
  context.fillText(text, x, y);

}
