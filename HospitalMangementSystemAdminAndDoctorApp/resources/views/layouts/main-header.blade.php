<!-- main-header opened -->
			<div class="main-header sticky side-header nav nav-item">
				<div class="container-fluid">
					<div class="main-header-left ">
						<div class="responsive-logo">
							<a href="{{ url('/' . $page='index') }}"><img src="{{URL::asset('assets/img/brand/logo.png')}}" class="logo-1" alt="logo"></a>
							<a href="{{ url('/' . $page='index') }}"><img src="{{URL::asset('assets/img/brand/logo-white.png')}}" class="dark-logo-1" alt="logo"></a>
							<a href="{{ url('/' . $page='index') }}"><img src="{{URL::asset('assets/img/brand/favicon.png')}}" class="logo-2" alt="logo"></a>
							<a href="{{ url('/' . $page='index') }}"><img src="{{URL::asset('assets/img/brand/favicon.png')}}" class="dark-logo-2" alt="logo"></a>
						</div>
						<div class="app-sidebar__toggle" data-toggle="sidebar">
							<a class="open-toggle" href="#"><i class="header-icon fe fe-align-left" ></i></a>
							<a class="close-toggle" href="#"><i class="header-icons fe fe-x"></i></a>
						</div>

					</div>
					<div class="main-header-right">


						<div class="nav nav-item  navbar-nav-right ml-auto">
							@if (auth()->user()->role == 0)
									<div class="dropdown nav-item main-header-message ">
									
									<div class="dropdown-menu">

										<div class="menu-header-content bg-primary text-right">
											<div class="d-flex">
												<h6 class="dropdown-title mb-1 tx-15 text-white font-weight-semibold">New  Notifecations</h6>
												<span class="badge badge-pill badge-warning mr-auto my-auto float-left">Mark All Read</span>
											</div>
											<p class="dropdown-title-text subtext mb-0 text-white op-6 pb-0 tx-12 ">You have 4 unread messages</p>
										</div>
										<div class="main-message-list chat-scroll">
											<a href="#" class="p-3 d-flex border-bottom">
												<div class="  drop-img  cover-image  " data-image-src="{{URL::asset('assets/img/faces/3.jpg')}}">
													<span class="avatar-status bg-teal"></span>
												</div>
												<div class="wd-90p">
													<div class="d-flex">
														<h5 class="mb-1 name">Petey Cruiser</h5>
													</div>
													<p class="mb-0 desc">I'm sorry but i'm not sure how to help you with that......</p>
													<p class="time mb-0 text-left float-right mr-2 mt-2">Mar 15 3:55 PM</p>
												</div>
											</a>

										</div>
										<div class="text-center dropdown-footer">
											<a href="text-center">VIEW ALL</a>
										</div>
									</div>
								</div>
							@endif



							<div class="dropdown main-profile-menu nav nav-item nav-link">
								<a class="profile-user d-flex" href=""><img alt="" style="object-fit: cover" src=" @if (auth()->user()->role == 2)
									{{ auth()->user()->doctor->picture }}
									@else
									{{ URL::asset('doc_img/defaultAdminImage.jpg') }}
									@endif "></a>
								<div class="dropdown-menu">
									<div class="main-header-profile bg-primary p-3">
										<div class="d-flex wd-100p">
											<div class="main-img-user"><img alt="" style="object-fit: cover" src=" @if (auth()->user()->role == 2)
												{{ auth()->user()->doctor->picture }}
												@else
												{{ URL::asset('doc_img/defaultAdminImage.jpg') }}
												@endif" class=""></div>
											<div class="ml-3 my-auto">
												<h6>{{ auth()->user()->username }}</h6><span>@if (auth()->user()->role == 2)
													Doctor
												@else
													Admin
												@endif</span>
											</div>
										</div>
									</div>
									{{-- <a class="dropdown-item" href=""><i class="bx bx-user-circle"></i>Profile</a>
									<a class="dropdown-item" href=""><i class="bx bx-cog"></i> Edit Profile</a>
									<a class="dropdown-item" href=""><i class="bx bxs-inbox"></i>Inbox</a>
									<a class="dropdown-item" href=""><i class="bx bx-envelope"></i>Messages</a>
									<a class="dropdown-item" href=""><i class="bx bx-slider-alt"></i> Account Settings</a> --}}
									<a class="dropdown-item" href="{{ url('/logout') }}"><i class="bx bx-log-out"></i> Sign Out</a>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
<!-- /main-header -->
