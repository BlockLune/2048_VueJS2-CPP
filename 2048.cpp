#include <iostream>
#include <cstdlib>
#include <ctime>
#include <conio.h>

using namespace std;

short box_c[4][4]; // 运算用 box_content
// short box_s[4][4]; // 显示用 box_show
bool map[4][4]; // 用于表示是否发生过合并

/*

([0][0])  ([0][1])  ([0][2])  ([0][3])

([1][0])  ([1][1])  ([1][2])  ([1][3])

([2][0])  ([2][1])  ([2][2])  ([2][3])

([3][0])  ([3][1])  ([3][2])  ([3][3])

*/

int getRandomNum(int min, int max)
{
    // 这里不能srand，不然就会生成出来都是同一个随机数
    return (rand() % (max - min + 1)) + min;
}

int getTwoOrFour()
{
    if (getRandomNum(1, 2) == 1)
    {
        return 2;
    }
    return 4;
}

void generateNewNum()
{
    for (int i = 0; i < 1;)
    {
        int possibleI = getRandomNum(0, 3);
        int possibleJ = getRandomNum(0, 3);
        if (box_c[possibleI][possibleJ] == 0)
        {
            i++;
            box_c[possibleI][possibleJ] = getTwoOrFour();
        }
    }
}

// 清空map
void map_refresh()
{
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            map[i][j] = 0;
        }
    }
}

void init() // 初始化
{
    // 初始化随机数种子
    srand(time(0));
    // 初始全部赋值为0
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            box_c[i][j] = 0;
            map[i][j] = 0;
        }
    }
    // 随机找两个位置填充2或者4
    /* for (int i = 0; i < 2;)
    {
        int possibleI = getRandomNum(0, 3);
        int possibleJ = getRandomNum(0, 3);
        if (box_c[possibleI][possibleJ] == 0)
        {
            i++;
            box_c[possibleI][possibleJ] = getTwoOrFour();
        }
    } */
    // 直接用这个函数生成两个得了
    generateNewNum();
    generateNewNum();
}

// 本来想显示运算分离的，后来感觉好像没啥必要
/* void refreshShow()
{
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            box_s[i][j] = box_c[i][j];
        }
    }
} */

void show()
{
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            cout << box_c[i][j] << " ";
            // cout << box_s[i][j] << " ";
        }
        cout << endl;
    }
    cout << endl;
}

void moveUp()
{
    for (int j = 0; j < 4; j++)
    {
        for (int i = 3; i > 0; i--)
        {
            if (box_c[i - 1][j] == 0)
            {
                box_c[i - 1][j] = box_c[i][j];
                box_c[i][j] = 0;
                // 将下边的全部平移过来
                for (int k = i; k < 3; k++)
                {
                    box_c[k][j] = box_c[k + 1][j];
                    box_c[k + 1][j] = 0;
                }
            }
            if (box_c[i - 1][j] == box_c[i][j] && map[i - 1][j] == 0 && map[i][j] == 0)
            {
                box_c[i - 1][j] *= 2;
                map[i - 1][j] = 1; //标识此次合并
                box_c[i][j] = 0;
                // 将下边的全部平移过来
                for (int k = i; k < 3; k++)
                {
                    box_c[k][j] = box_c[k + 1][j];
                    box_c[k + 1][j] = 0;
                }
            }
        }
    }
    generateNewNum();
    map_refresh();
}

void moveDown()
{
    for (int j = 0; j < 4; j++)
    {
        for (int i = 0; i < 3; i++)
        {
            if (box_c[i + 1][j] == 0)
            {
                box_c[i + 1][j] = box_c[i][j];
                box_c[i][j] = 0;
                // 将上边的全部平移过来
                for (int k = i; k > 0; k--)
                {
                    box_c[k][j] = box_c[k - 1][j];
                    box_c[k - 1][j] = 0;
                }
            }
            if (box_c[i + 1][j] == box_c[i][j] && map[i + 1][j] == 0 && map[i][j] == 0)
            {
                box_c[i + 1][j] *= 2;
                map[i + 1][j] = 1; //标识此次合并
                box_c[i][j] = 0;
                // 将上边的全部平移过来
                for (int k = i; k > 0; k--)
                {
                    box_c[k][j] = box_c[k - 1][j];
                    box_c[k - 1][j] = 0;
                }
            }
        }
    }
    generateNewNum();
    map_refresh();
}

void moveLeft()
{
    for (int i = 0; i < 4; i++)
    {
        for (int j = 3; j > 0; j--)
        {
            if (box_c[i][j - 1] == 0)
            {
                box_c[i][j - 1] = box_c[i][j];
                box_c[i][j] = 0;
                // 将右边的全部平移过来
                for (int k = j; k < 3; k++)
                {
                    box_c[i][k] = box_c[i][k + 1];
                    box_c[i][k + 1] = 0;
                }
            }
            if (box_c[i][j - 1] == box_c[i][j] && map[i][j - 1] == 0 && map[i][j] == 0)
            {
                box_c[i][j - 1] *= 2;
                map[i][j - 1] = 1; //标识此次合并
                box_c[i][j] = 0;
                // 将右边的全部平移过来
                for (int k = j; k < 3; k++)
                {
                    box_c[i][k] = box_c[i][k + 1];
                    box_c[i][k + 1] = 0;
                }
            }
        }
    }
    generateNewNum();
    map_refresh();
}

void moveRight()
{
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if (box_c[i][j + 1] == 0)
            {
                box_c[i][j + 1] = box_c[i][j];
                box_c[i][j] = 0;
                // 将左边的全部平移过来
                for (int k = j; k > 0; k--)
                {
                    box_c[i][k] = box_c[i][k - 1];
                    box_c[i][k - 1] = 0;
                }
            }
            if (box_c[i][j + 1] == box_c[i][j] && map[i][j + 1] == 0 && map[i][j] == 0)
            {
                box_c[i][j + 1] *= 2;
                map[i][j + 1] = 1; //标识此次合并
                box_c[i][j] = 0;
                // 将右边的全部平移过来
                for (int k = j; k > 0; k--)
                {
                    box_c[i][k] = box_c[i][k - 1];
                    box_c[i][k - 1] = 0;
                }
            }
        }
    }
    generateNewNum();
    map_refresh();
}

int main()
{
    init();
    show();
    // https://www.runoob.com/w3cnote/c-get-keycode.html
    while (true)
    {
        if (_kbhit())
        {                      //如果有按键按下，则_kbhit()函数返回真
            int ch = _getch(); //使用_getch()函数获取按下的键值
            switch (ch)
            {
            case 119: // w
                moveUp();
                show();
                break;
            case 97: // a
                moveLeft();
                show();
                break;
            case 115: // s
                moveDown();
                show();
                break;
            case 100: // d
                moveRight();
                show();
                break;
            default:
                break;
            }
            if (ch == 27)
            {
                break;
            } //当按下ESC时循环，ESC键的键值时27.
        }
    }
    return 0;
}