  <div class="
              app-card app-card-account
              shadow-sm
              d-flex
              flex-column
              align-items-start
            ">
      <div class="app-card-body px-4 w-100">
          <div class="item border-bottom py-3">
              <div class="row justify-content-between align-items-center">
                  <div class="col-auto">
                      <div class="item-label mb-2"><strong>Photo</strong></div>
                      <div class="item-data">
                          <img class="profile-image" src="{{ $user->provider_id != "" ? $user->img : $user->proifie_image }}" alt="" />
                      </div>
                  </div>
              </div>
          </div>
          <div class="item border-bottom py-3">
              <div class="row justify-content-between align-items-center">
                  <div class="col-auto">
                      <div class="item-label"><strong>Name</strong></div>
                      <div class="item-data">{{ $user->name }}</div>
                  </div>
              </div>
          </div>
          <div class="item border-bottom py-3">
              <div class="row justify-content-between align-items-center">
                  <div class="col-auto">
                      <div class="item-label"><strong>Email</strong></div>
                      <div class="item-data">{{ $user->email ?? "Social Login" }}</div>
                  </div>
              </div>
          </div>
  </div>
