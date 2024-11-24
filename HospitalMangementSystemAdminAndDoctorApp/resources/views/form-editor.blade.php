@extends('layouts.master')
@section('css')
<!--- Internal Select2 css-->
<link href="{{URL::asset('assets/plugins/select2/css/select2.min.css')}}" rel="stylesheet">
<!--Internal  Quill css -->
<link href="{{URL::asset('assets/plugins/quill/quill.snow.css')}}" rel="stylesheet">
<link href="{{URL::asset('assets/plugins/quill/quill.bubble.css')}}" rel="stylesheet">
@endsection
@section('page-header')
				<!-- breadcrumb -->
				<div class="breadcrumb-header justify-content-between">
					<div class="my-auto">
						<div class="d-flex">
							<h4 class="content-title mb-0 my-auto">Forms</h4><span class="text-muted mt-1 tx-13 mr-2 mb-0">/ Form-Editor</span>
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
				<!-- row -->

@endsection
@section('js')
<!--Internal  Select2 js -->
<script src="{{URL::asset('assets/plugins/select2/js/select2.min.js')}}"></script>
<!--Internal quill js -->
<script src="{{URL::asset('assets/plugins/quill/quill.min.js')}}"></script>
<!-- Internal Form-editor js -->
<script src="{{URL::asset('assets/js/form-editor.js')}}"></script>
@endsection
