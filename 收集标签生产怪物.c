

#include "stdio.h"

int main(int argc, char const *argv[])
{
  char *theClass[5]= {"等待","文章","博客","下载","佳作"};
  char theReplace[10];
  int miss = 0;
  char theLink[100];
  char theName[20];

  printf("请输入这个怪兽的种族：\n文章：1\n博客：2\n下载：3\n佳作：4\n自定义：0\n");
  scanf("%d",&miss);
  if(miss == 0) {
    printf("请输入新种族：\n");
    scanf("%s",&*theReplace);
    theClass[0] = theReplace;
}
  printf("请输入这个怪兽的名字：\n");
  scanf("%s",&*theName);
  printf("请赋予这个怪兽的归属地：\n");
  scanf("%s",&*theLink);


  printf("\n<article>\n");
  printf("<a href='%s' target='_blank'>【%s】%s</a>\n",theLink,theClass[miss],theName);
  printf("</article>\n\n\n");

  return 0;
}





