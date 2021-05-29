import React from "react";
import "./Erp.css";
const Erp = () => {
  return (
    <div className="erp-kont">
      <div className="erp-wrapper">
        <div className="erp-title">
          <h2 className="text-title">ERP cистемы</h2>
        </div>
        <div className="erp-l-r-wrapper">
          <div className="erp-left">
            <div className="erp-left-wrapper">
              <img
                src="https://udevs.io/static/desktop-be2444bb4c87961054714533a5d5a728.png"
                alt=""
              />
            </div>
          </div>
          <div className="erp-right">
            <div className="erp-right-text">
              <p>IT Системы любого уровня сложности в удобные для вас сроки.</p>
            </div>
            <div className="erp-right-cards">
              <div className="erp-card">
                <div className="erp-card-icon">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NyA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQyLjYyMjYgOS4zMzMyNUgxNC44MzMxQzEwLjk5NjIgOS4zMzMyNSA3Ljg4NTc0IDEyLjQ2NzMgNy44ODU3NCAxNi4zMzMzVjM5LjY2NjZDNy44ODU3NCA0My41MzI2IDEwLjk5NjIgNDYuNjY2NiAxNC44MzMxIDQ2LjY2NjZINDIuNjIyNkM0Ni40NTk1IDQ2LjY2NjYgNDkuNTcgNDMuNTMyNiA0OS41NyAzOS42NjY2VjE2LjMzMzNDNDkuNTcgMTIuNDY3MyA0Ni40NTk1IDkuMzMzMjUgNDIuNjIyNiA5LjMzMzI1WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMS43ODEgMjguMDAwMUMyNC4zMzg5IDI4LjAwMDEgMjYuNDEyNiAyNS45MTA3IDI2LjQxMjYgMjMuMzMzNEMyNi40MTI2IDIwLjc1NjEgMjQuMzM4OSAxOC42NjY3IDIxLjc4MSAxOC42NjY3QzE5LjIyMyAxOC42NjY3IDE3LjE0OTQgMjAuNzU2MSAxNy4xNDk0IDIzLjMzMzRDMTcuMTQ5NCAyNS45MTA3IDE5LjIyMyAyOC4wMDAxIDIxLjc4MSAyOC4wMDAxWiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zNS42NzU4IDE4LjY2NjdINDAuMzA3NCIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zNS42NzU4IDI4SDQwLjMwNzQiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTcuMTQ5NCAzNy4zMzMzSDQwLjMwNzMiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                    alt=""
                  />
                </div>
                <div className="erp-card-text">
                  <p>CRM</p>
                </div>
              </div>
              <div className="erp-card">
                <div className="erp-card-icon">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUxLjMzMzcgMjEuMDAwMUwyOC4wMDAzIDExLjY2NjdMNC42NjY5OSAyMS4wMDAxTDI4LjAwMDMgMzAuMzMzNEw1MS4zMzM3IDIxLjAwMDFaTTUxLjMzMzcgMjEuMDAwMVYzNS4wMDAxIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0IDI0LjczMzRWMzcuMzMzNEMxNCAzOS4xODk5IDE1LjQ3NSA0MC45NzA0IDE4LjEwMDUgNDIuMjgzMUMyMC43MjYgNDMuNTk1OSAyNC4yODcgNDQuMzMzNCAyOCA0NC4zMzM0QzMxLjcxMyA0NC4zMzM0IDM1LjI3NCA0My41OTU5IDM3Ljg5OTUgNDIuMjgzMUM0MC41MjUgNDAuOTcwNCA0MiAzOS4xODk5IDQyIDM3LjMzMzRWMjQuNzMzNCIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                    alt=""
                  />
                </div>
                <div className="erp-card-text">
                  <p>CRM</p>
                </div>
              </div>
              <div className="erp-card">
                <div className="erp-card-icon">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjMzMyAyMy4zMzMzTDI3Ljk5OTcgOS4zMzMyNUwzOS42NjYzIDIzLjMzMzMiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNDkgMjMuMzMzM0w0NC4zMzMzIDQxLjk5OTlDNDQuMTE1MiA0My4zMzc0IDQzLjUyODcgNDQuNTM2OCA0Mi42NzYgNDUuMzg5NUM0MS44MjMzIDQ2LjI0MjIgNDAuNzU4NCA0Ni42OTQxIDM5LjY2NjcgNDYuNjY2NkgxNi4zMzMzQzE1LjI0MTYgNDYuNjk0MSAxNC4xNzY3IDQ2LjI0MjIgMTMuMzI0IDQ1LjM4OTVDMTIuNDcxMyA0NC41MzY4IDExLjg4NDggNDMuMzM3NCAxMS42NjY3IDQxLjk5OTlMNyAyMy4zMzMzSDQ5WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yNy45OTk3IDM5LjY2NjZDMzAuNTc3IDM5LjY2NjYgMzIuNjY2MyAzNy41NzcyIDMyLjY2NjMgMzQuOTk5OUMzMi42NjYzIDMyLjQyMjYgMzAuNTc3IDMwLjMzMzMgMjcuOTk5NyAzMC4zMzMzQzI1LjQyMjMgMzAuMzMzMyAyMy4zMzMgMzIuNDIyNiAyMy4zMzMgMzQuOTk5OUMyMy4zMzMgMzcuNTc3MiAyNS40MjIzIDM5LjY2NjYgMjcuOTk5NyAzOS42NjY2WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                    alt=""
                  />
                </div>
                <div className="erp-card-text">
                  <p>CRM</p>
                </div>
              </div>
              <div className="erp-card">
                <div className="erp-card-icon">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjEwMTUgMjUuNjY3MUgzNy45MDA1IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE4LjEwMTUgMTUuODk5NUgzNy45MDA1IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE4LjEwMTUgMzUuODk5NUgzNy45MDA1IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTExLjY2OCA0OVYxMS42NjY3QzExLjY2OCAxMC40MjkgMTIuMTU5NiA5LjI0MiAxMy4wMzQ4IDguMzY2ODNDMTMuOTEgNy40OTE2NyAxNS4wOTcgNyAxNi4zMzQ2IDdIMzkuNjY4QzQwLjkwNTYgNyA0Mi4wOTI2IDcuNDkxNjcgNDIuOTY3OCA4LjM2NjgzQzQzLjg0MyA5LjI0MiA0NC4zMzQ2IDEwLjQyOSA0NC4zMzQ2IDExLjY2NjdWNDlMMzcuMzM0NiA0NC4zMzMzTDMyLjY2OCA0OUwyOC4wMDEzIDQ0LjMzMzNMMjMuMzM0NiA0OUwxOC42NjggNDQuMzMzM0wxMS42NjggNDlaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                    alt=""
                  />
                </div>
                <div className="erp-card-text">
                  <p>CRM</p>
                </div>
              </div>
              <div className="erp-card">
                <div className="erp-card-icon">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ0LjMzMzMgMTEuNjY2N0gxMS42NjY3QzkuMDg5MzQgMTEuNjY2NyA3IDEzLjc1NjEgNyAxNi4zMzM0VjM5LjY2NjdDNyA0Mi4yNDQxIDkuMDg5MzQgNDQuMzMzNCAxMS42NjY3IDQ0LjMzMzRINDQuMzMzM0M0Ni45MTA3IDQ0LjMzMzQgNDkgNDIuMjQ0MSA0OSAzOS42NjY3VjE2LjMzMzRDNDkgMTMuNzU2MSA0Ni45MTA3IDExLjY2NjcgNDQuMzMzMyAxMS42NjY3WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik03IDE2LjMzMzNMMjggMzAuMzMzM0w0OSAxNi4zMzMzIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                    alt=""
                  />
                </div>
                <div className="erp-card-text">
                  <p>CRM</p>
                </div>
              </div>
              <div className="erp-card">
                <div className="erp-card-icon">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgNDguOTk5OVYxOC42NjY2TDI4IDkuMzMzMjVMNDkgMTguNjY2NlY0OC45OTk5IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMwLjMzMyAzMC4zMzMzSDM0Ljk5OTdIMzkuNjY2M1Y0OC45OTk5SDE2LjMzM1YzNC45OTk5SDIzLjMzM0gzMC4zMzMiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzAuMzMzMyA0OS4wMDAxVjI4LjAwMDFDMzAuMzMzMyAyNy4zODEyIDMwLjA4NzUgMjYuNzg3OCAyOS42NDk5IDI2LjM1MDJDMjkuMjEyMyAyNS45MTI2IDI4LjYxODggMjUuNjY2NyAyOCAyNS42NjY3SDIzLjMzMzNDMjIuNzE0NSAyNS42NjY3IDIyLjEyMSAyNS45MTI2IDIxLjY4MzQgMjYuMzUwMkMyMS4yNDU4IDI2Ljc4NzggMjEgMjcuMzgxMiAyMSAyOC4wMDAxVjM1LjAwMDEiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" />
                </div>
                <div className="erp-card-text">
                  <p>CRM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Erp;
