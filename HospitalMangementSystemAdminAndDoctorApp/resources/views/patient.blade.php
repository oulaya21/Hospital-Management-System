@extends('layouts.master')
@section('css')
@endsection
@section('page-header')
				<!-- breadcrumb -->
				<div class="breadcrumb-header justify-content-between">
					<div class="my-auto">
						<div class="d-flex">
							<h4 class="content-title mb-0 my-auto">Dashboard</h4><span class="text-muted mt-1 tx-13 mr-2 mb-0">/ Patients</span>
						</div>
					</div>
					<!-- <div class="d-flex my-xl-auto right-content">
						<div class="pr-1 mb-3 mb-xl-0">
							<button type="button" class="btn btn-info btn-icon ml-2"><i class="mdi mdi-filter-variant"></i></button>
						</div>
						<div class="pr-1 mb-3 mb-xl-0">
							<button type="button" class="btn btn-danger btn-icon ml-2"><i class="mdi mdi-star"></i></button>
						</div>
						<div class="pr-1 mb-3 mb-xl-0">
							<button type="button" class="btn btn-warning  btn-icon ml-2"><i class="mdi mdi-refresh"></i></button>
						</div>

					</div> -->
				</div>
				<!-- breadcrumb -->
@endsection
@section('content')
				<!-- row opened -->
				<div class="row row-sm">
					<div class="col-xl-12">
						<div class="card">
							<div class="card-header pb-0">
								<div class="d-flex justify-content-between">
									<h4 class="card-title mg-b-0">All Patients</h4>
									<i class="mdi mdi-dots-horizontal text-gray"></i>
								</div>
							</div>
							<div class="card-body">
								<div class="table-responsive">
									<table class="table mg-b-0 text-md-nowrap">
										<thead>
											<tr>
												<th>ID</th>
												<th>Name</th>
												<th>Email</th>
												<th>CIN</th>
												<th>Phone</th>
												<th>Age</th>
											</tr>
										</thead>
										<tbody>
                                            @foreach($patients as $patient)
											<tr>
												<th scope="row">{{ $patient->id }}</th>
												<td>{{ $patient->fullname }}</td>
												<td>{{ $patient->user->email }}</td>
												<td>{{ $patient->cne }}</td>
												<td>{{ $patient->phone }}</td>
												<td>{{ $patient->age }}</td>
												<td><a class="btn btn-sm btn-info  btn-block" href='{{ url("/patients/profile/". $patient->id) }}' >See More</a></td>
												<td><a class="btn btn-sm btn-danger btn-block" onclick="Delete({{ $patient->user->id }})" >Delete</a></td>
											</tr>
											@endforeach
										</tbody>
									</table>
								</div>

							</div>
						</div>
					</div>
					<!--/div-->


			</div>
			<!-- Container closed -->
		</div>
		<!-- main-content closed -->

@endsection
@section('js')
		<script>
			function Delete(user){
				axios.delete( window.location.origin + '/api/users/'+ user)
				.then( function (res) {
					window.location.reload();
				})
			}
		</script>
@endsection
