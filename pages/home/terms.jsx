import Head from 'next/head';
import Link from 'next/link';

import Footer from 'components/Footer';
import Logo from 'components/Logo';

export default function Terms() {
	return (
		<>
			<Head>
				<title>Quanlychitieu.fun – Điều khoản sử dụng</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
			</Head>

			<div
				className={`font-default relative min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-50 pl-2 pr-2 leading-relaxed text-zinc-800`}
			>
				<div className="relative m-auto h-[40px] max-w-4xl pt-3">
					<header className="absolute left-0 right-0 top-3 z-20 flex items-center justify-between">
						<Link href="/" className="flex h-[40px] max-w-[180px] items-center p-3 text-2xl">
							<Logo />
						</Link>
					</header>
				</div>
				<div className="absolute inset-x-0 top-0 z-10 h-40 overflow-hidden text-slate-600/40 opacity-10 [mask-image:linear-gradient(to_top,transparent,white)]">
					<div className="">
						<svg className="absolute inset-0 top-0 h-full w-full text-gray-800" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<pattern
									id="pricing-pattern"
									width="32"
									height="32"
									patternUnits="userSpaceOnUse"
									x="50%"
									y="100%"
									patternTransform="translate(0 -1)"
								>
									<path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
								</pattern>
							</defs>
							<rect width="100%" height="100%" fill="url(#pricing-pattern)"></rect>
						</svg>
					</div>
				</div>
				<div className="font-default m-4 mt-4 h-full max-w-3xl pt-3 sm:m-4 sm:mt-8 lg:m-auto">
					<h1 className="mb-6 mt-10 text-center text-3xl font-black leading-[1.15] tracking-[-0.03em] sm:text-4xl sm:leading-[1.15]">
						Điều khoản và điều kiện
					</h1>
					<p className="mt-2">
						Bằng cách tải xuống hoặc sử dụng ứng dụng, các điều khoản này sẽ tự động áp dụng cho bạn – do đó bạn nên đảm
						bảo rằng mình đã đọc kỹ các điều khoản này trước khi sử dụng ứng dụng. Bạn không được phép sao chép hoặc sửa
						đổi ứng dụng, bất kỳ phần nào của ứng dụng hoặc nhãn hiệu của chúng tôi dưới bất kỳ hình thức nào.
					</p>
					<p className="mt-2">
						Bạn không được phép tìm cách trích xuất mã nguồn của ứng dụng và bạn cũng không nên cố dịch ứng dụng sang
						các ngôn ngữ khác hoặc tạo các phiên bản phái sinh.
					</p>
					<p className="mt-2">
						Vì lý do đó, chúng tôi có quyền thực hiện các thay đổi đối với ứng dụng hoặc tính phí cho các dịch vụ của
						ứng dụng bất kỳ lúc nào và vì bất kỳ lý do gì. Chúng tôi sẽ không bao giờ tính phí bạn đối với ứng dụng hoặc
						dịch vụ của ứng dụng mà không nói rõ cho bạn biết chính xác bạn đang trả tiền cho cái gì.
					</p>
					<p className="mt-2">
						Bạn có trách nhiệm giữ an toàn cho điện thoại và quyền truy cập vào ứng dụng của mình. Do đó, chúng tôi
						khuyên bạn không nên bẻ khóa hoặc root điện thoại của mình, đây là quá trình loại bỏ các hạn chế và giới hạn
						phần mềm do hệ điều hành chính thức của thiết bị áp đặt. Nó có thể khiến điện thoại của bạn dễ bị phần mềm
						độc hại/vi-rút/chương trình độc hại xâm nhập, ảnh hưởng đến các tính năng bảo mật của điện thoại và điều đó
						có thể có nghĩa là ứng dụng Quanlychitieu.fun sẽ không hoạt động bình thường hoặc hoàn toàn không hoạt động.
						Bạn nên biết rằng có một số điều sẽ không chịu trách nhiệm. Một số chức năng của ứng dụng sẽ yêu cầu ứng
						dụng phải có kết nối Internet đang hoạt động.
					</p>
					<p className="mt-2">
						Kết nối có thể là Wi-Fi hoặc do nhà cung cấp mạng di động của bạn cung cấp nhưng không thể chịu trách nhiệm
						về việc ứng dụng không hoạt động với đầy đủ chức năng nếu bạn không có quyền truy cập Wi-Fi và bạn không có
						bất kỳ dung lượng dữ liệu nào cho phép bên trái. Nếu bạn đang sử dụng ứng dụng bên ngoài khu vực có Wi-Fi,
						bạn nên nhớ rằng các điều khoản của thỏa thuận với nhà cung cấp mạng di động của bạn sẽ vẫn được áp dụng. Do
						đó, nhà cung cấp dịch vụ di động của bạn có thể tính phí dữ liệu trong suốt thời gian kết nối khi truy cập
						ứng dụng hoặc các khoản phí khác của bên thứ ba. Khi sử dụng ứng dụng, bạn chấp nhận chịu trách nhiệm về bất
						kỳ khoản phí nào như vậy, bao gồm cả phí chuyển vùng dữ liệu nếu bạn sử dụng ứng dụng bên ngoài lãnh thổ quê
						hương của mình (tức là khu vực hoặc quốc gia) mà không tắt chuyển vùng dữ liệu. Nếu bạn không phải là người
						thanh toán hóa đơn cho thiết bị mà bạn đang sử dụng ứng dụng, xin lưu ý rằng chúng tôi cho rằng bạn đã nhận
						được sự cho phép từ người thanh toán hóa đơn để sử dụng ứng dụng.
					</p>
					<p className="mt-2">
						Đồng thời, không phải lúc nào bạn cũng chịu trách nhiệm về cách bạn sử dụng ứng dụng, tức là. Bạn cần đảm
						bảo rằng thiết bị của mình luôn được sạc – nếu thiết bị hết pin và bạn không thể bật thiết bị để tận dụng
						Dịch vụ, không thể chấp nhận trách nhiệm. Đối với việc bạn sử dụng ứng dụng, khi bạn đang sử dụng ứng dụng,
						điều quan trọng cần lưu ý là mặc dù chúng tôi cố gắng đảm bảo rằng ứng dụng luôn được cập nhật và chính xác,
						nhưng chúng tôi dựa vào các bên thứ ba cung cấp thông tin cho chúng tôi để chúng tôi có thể cung cấp thông
						tin đó cho bạn. không chịu trách nhiệm pháp lý đối với bất kỳ tổn thất nào, trực tiếp hay gián tiếp, mà bạn
						gặp phải do hoàn toàn dựa vào chức năng này của ứng dụng. Tại một số điểm, chúng tôi có thể muốn cập nhật
						ứng dụng. Ứng dụng hiện khả dụng trên – các yêu cầu đối với hệ thống (và đối với mọi hệ thống bổ sung mà
						chúng tôi quyết định mở rộng khả năng cung cấp ứng dụng) có thể thay đổi và bạn sẽ cần tải xuống các bản cập
						nhật nếu muốn tiếp tục sử dụng ứng dụng. không hứa hẹn rằng nó sẽ luôn cập nhật ứng dụng để nó phù hợp với
						bạn và/hoặc hoạt động với phiên bản mà bạn đã cài đặt trên thiết bị của mình.
					</p>{' '}
					<p className="mt-2">
						Tuy nhiên, bạn hứa sẽ luôn chấp nhận các bản cập nhật cho ứng dụng khi được cung cấp cho bạn. Chúng tôi cũng
						có thể muốn ngừng cung cấp ứng dụng và có thể chấm dứt việc sử dụng ứng dụng bất kỳ lúc nào mà không cần
						thông báo cho bạn về việc chấm dứt. Trừ khi chúng tôi có thông báo khác cho bạn, khi có bất kỳ sự chấm dứt
						nào, (a) các quyền và giấy phép được cấp cho bạn theo các điều khoản này sẽ kết thúc; (b) bạn phải ngừng sử
						dụng ứng dụng và (nếu cần) xóa ứng dụng đó khỏi thiết bị của mình.
					</p>
				</div>
				<div className="font-default m-4 mt-4 max-w-3xl pt-3 sm:m-auto">
					<h2 className="mb-3 mt-2 text-2xl font-extrabold leading-6">Thay đổi đối với Điều khoản và Điều kiện</h2>
					<p className="mt-2">
						Tôi có thể cập nhật Điều khoản và Điều kiện của chúng tôi theo thời gian. Vì vậy, bạn nên xem lại trang này
						định kỳ để biết bất kỳ thay đổi nào. Tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách đăng Điều
						khoản và Điều kiện mới trên trang này. Các điều khoản và điều kiện này có hiệu lực kể từ ngày 01/01/2023
					</p>
				</div>
				<div className="font-default relative m-4 mb-20 mt-3 max-w-3xl pt-3 sm:m-auto sm:mb-20">
					<h2 className="mb-3 mt-2 text-2xl font-extrabold leading-6">Contact Us</h2>
					<p className="mt-2">
						Nếu có bất kỳ câu hỏi hoặc đề xuất nào về Chính sách quyền riêng tư, vui lòng liên hệ theo địa chỉ
						<a className="border-b-[1px] border-black pb-[1px]" href="mailto:hello@quanlychitieu.fun.">
							hello@quanlychitieu.fun.
						</a>
					</p>
				</div>
				<Footer />
			</div>
		</>
	);
}
