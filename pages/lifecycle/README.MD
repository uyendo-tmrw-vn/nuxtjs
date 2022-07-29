# Docs

1. https://topdev.vn/blog/gioi-thieu-lifecycle-hook-cua-vue-js/
2. https://topdev.vn/blog/gioi-thieu-lifecycle-hook-cua-vue-js/


``
# lifecycle-hook
https://topdev.vn/blog/gioi-thieu-lifecycle-hook-cua-vue-js/

1. Khởi tạo
- beforeCreate(): Sự kiện xảy ra khi mới vừa khởi tạo component, data chưa khởi tạo, và các sự kiện chưa được setup
- create(): Có thể truy xuất đến data và events. Template và Virtual DOM chưa được mount và render

2. Chèn vào DOM
- beforeMount(): this.$el chưa tồn tại
- mounted(): đã render xong

3. Cập nhật
- beforeUpdate(): sau khi mount (when data change)
- updated(): Sau khi component đã re-render

4. Xóa 
- beforeDestroy(): Trước khi destroy
- destroyed(): Sau khi đã destroy

Ngoài ra, component keep-alive còn có 2 hook khác là activated và deactivated




https://allaravel.com/blog/thuoc-tinh-computed-trong-vue-js#:~:text=Thu%E1%BB%99c%20t%C3%ADnh%20computed%20ch%E1%BB%89%20%C4%91%C6%B0%E1%BB%A3c,(v%E1%BB%9Bi%20m%E1%BB%8Di%20thay%20%C4%91%E1%BB%95i).

computed property do nó liên quan đến việc thao tác với dữ liệu có sẵn.

``

``
# Computed and Methods
https://allaravel.com/blog/thuoc-tinh-computed-trong-vue-js#:~:text=Thu%E1%BB%99c%20t%C3%ADnh%20computed%20ch%E1%BB%89%20%C4%91%C6%B0%E1%BB%A3c,(v%E1%BB%9Bi%20m%E1%BB%8Di%20thay%20%C4%91%E1%BB%95i).

- computed: 
    + Được tính toán lại khi cần thiết hay khi các dữ liệu nó phụ thuộc vào thay đổi. 
    + Không cho phép có tham số
    + Liên quan đến việc thao tác với dữ liệu có sẵn.
    + Được cache lại nhằm nâng cao hiệu năng

- methods: 
    + Được thực hiện mỗi khi trang được render (với mọi thay đổi).
    + Cho phép có tham số

* Chỉ dùng đến phương thức được khai báo trong methods khi cần đến một hàm thuần túy hoặc khi cần có tham số cần truyền vào.
*Với computed property, sử dụng chúng khi bạn muốn thao tác với dữ liệu có trong Vue instance, ví dụ như khi bạn muốn lọc một mảng dữ liệu, chuyển đổi dạng dữ liệu...


``