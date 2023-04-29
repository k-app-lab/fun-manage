import tkinter as tk
from tkinter import ttk

# ウィンドウを作成する
window = tk.Tk()
window.title("来場者管理")

# ウィンドウの幅と高さを指定する
window.geometry("600x500")

# 表のヘッダーを定義する
header = ["名前", "最後の来場日", "カウント"]

# 表のデータを定義する
data = [
    ["友達1", "2023/04/12"],
    ["友達2", "2023/04/12"],
    ["友達3", "2023/04/12"],
    ["友達4", "2023/04/12"],
]

# 表を表示するためのTreeviewを作成する
treeview = ttk.Treeview(window, columns=header, show="headings")
treeview.grid(row=0, column=0, sticky="nsew")

# 表のヘッダーを設定する
for col in header:
    treeview.heading(col, text=col)

# 表のデータを追加する
for row in data:
    treeview.insert("", "end", values=row)


# ボタンを配置する関数
def button_clicked(event):
    item = treeview.selection()[0]
    name = treeview.item(item, "values")[0]
    print(f"ボタンがクリックされました: {name}")


# 表にボタンを追加する
for item in treeview.get_children():
    button = ttk.Button(treeview, text="ボタン")
    button.bind("<Button-1>", button_clicked)
    treeview.set(item, "#3", "")
    treeview.set(item, "#3", button)

# ウィンドウを表示する
window.mainloop()
