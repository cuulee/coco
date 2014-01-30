define([
        'jquery',
        'views/sync_button',
        'collections/uploadqueue_status'
], function($, sync_button, uploadqueue_status) {
	var check_connectivity={
			is_internet_connected : function(){
				var dfd = new $.Deferred();
				var that = this;
				$.get("/coco/check_connectivity/")
					.done(function() {
						if (!uploadqueue_status.is_uploadqueue_empty())
						{
							sync_button.highlight_sync();
						}
						dfd.resolve();
					})
					.fail(function(error) {
                        dfd.reject(error);
                    });
            return dfd.promise();
	        },
	        is_uploadqueue_empty: function() {
	            console.log("FORMCONTROLLER: length of upload_collection - " + upload_collection.length);
	            console.log(upload_collection);

	            return upload_collection.length <= 0;
	        },
	}
	return check_connectivity;
});