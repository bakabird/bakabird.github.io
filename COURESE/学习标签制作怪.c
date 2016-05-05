#include "stdio.h"

int main(int argc, char const *argv[])
{
  char theLink[100];
  char thePIc[100];
  char theName[20];

  printf("请输入异世界 FITA 值：\n");
  scanf("%s",&*theLink);
  printf("请输入异世界 鸟瞰图 索引码：\n");
  scanf("%s",&*thePIc);
  printf("请赋予这个虫洞一个名号：\n");
  scanf("%s",&*theName);


  printf("\n<div class='chanels'>\n<div class='windows'>\n");
  printf("<a href='%s'>\n",theLink);
  printf("<img src='%s'>\n",thePIc);
  printf("<h2>%s</h2>\n",theName);
  printf("</a>\n</div>\n</div>\n\n\n");

  return 0;
}





